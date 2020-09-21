import React,{Component,createContext,Fragment,createRef} from "react";
import RDropdownButton from 'r-dropdown-button';
import "./index.css";
var RChatBoxContext = createContext();
export default class RChatbox extends Component{
  constructor(props){
    super(props);
    this.replyMaxCharacter = 300; 
    this.state = {dragMode:false,messageInput:'',replyId:false};
    this.dom = createRef();
    var {theme = {},getConfigSample} = this.props;
    this.theme = {
      background:'#eee',
      messsageBachground:'#fff',
      myMessageBackground:'#00a0fd',
      color:'#333',
      myColor:'#fff',
      attachmentBackground:'#1f80ee',
      replyBackground:'rgba(0,0,0,.07)',
      ...theme
    }
    this.updateTranslate();
    if(getConfigSample){
      getConfigSample(
        `
        <Chatbox
          userId={userId} // id of current user
          rtl={boolean} // direction of chatbox
          globalization={'en' or 'fa' or other implemented languages in translate props}
          translate={{
            en:{
              'Close':'Close',
              'Send':'Send',
              'UploadFile':Upload File',
              'ReplyTo':'Reply To',
              'DropFilesHere':'Drop Files Here',
              'Reply':'Reply',
              'DeleteMessage':'Delete Message',
              'DeletedMessage''Deleted Message',
              'WriteMessage':'Write Message',
            },
            ...
          }}
          messages={messages} // list of chat messages
          theme = {{
            background:'#eee',
            messsageBachground:'#fff',
            myMessageBackground:'#00a0fd',
            color:'#333',
            myColor:'#fff',
            attachmentBackground:'#1f80ee',
            replyBackground:'rgba(0,0,0,.07)'
          }}
          header={{
            onClose:()=>{ //render close button
              // some codes ....
            },
            buttons:[
              {
                title:...,
                onClick:...,
                iconClass:...
              },
              ....
            ],
            title:... // title of chatbox
          }}
          dataset={{
              text: 'Description', //text of message
              ownerName: 'UserName', //name of message sender
              ownerId: 'CreatorId', //id of message sender
              time: 'CreateTimeCulture', //time of message 
              attachmentTitle: 'CommentAttachments.0.FileName', //title of attachment of message 
              attachmentFormat: 'CommentAttachments.0.FileExtention',  //format of attachment of message
              attachmentId: 'CommentAttachments.0.Id',
              replyTo: 'ReplyId', // id of message that this message is reply to it
              date: 'CreateDateCulture', //date of message
              id: 'Id' // id of message
          }}
          onUpload={({text,files = [], replyId}) => {
            var { messages, tenant, token, EntityName } = this.state;
            var { id } = this.props;
            var data = new FormData();
            if(text){data.append("Description", text)}
            for (var i = 0; i < files.length; i++) {data.append("file", files[i]);}
            data.append("EntityName", EntityName);
            data.append("EntityId", id);
            if (replyId) {data.append("ReplyId", replyId)}
            var settings = {
              "url": 'https://attachment.dev.raveshmand.ir/' + tenant + '/Comment/CreateWithAttachmentAsync',
              "method": "POST",
              "timeout": 0,
              "headers": {"Authorization": "Bearer " + token},
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "dataType": "json",
              "data": data
            };
            $.ajax(settings).done((response) => {
                var {Value = []} = response;
                for(var i = 0; i < Value.length; i++){messages.push(Value[i]);}
                this.setState({ messages })
            });
          }}
          onDownload={async ({fileName,id,format})=>{
            var settings = {
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({ "Id": id }),
            };
            fetch('url',settings)
              .then(resp => resp.blob())
              .then(blob => {
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.style.display = 'none';
                  a.href = url;
                  a.download = fileName;
                  document.body.appendChild(a);
                  a.click();
                  window.URL.revokeObjectURL(url);
              })
              .catch(() => alert('oh no!'));
          }}
        />
        `
      )
    }
  } 
  updateTranslate(){
    var {translate = {}} = this.props;
    var dictionary = {
      'Close':{en:'Close',fa:'بستن'},
      'Send':{en:'Send',fa:'ارسال'},
      'UploadFile':{en:'Upload File',fa:'آپلود فایل'},
      'ReplyTo':{en:'Reply To',fa:'پاسخ به'},
      'DropFilesHere':{en:'Drop Files Here',fa:'فایل ها را به اینجا بکشید'},
      'Reply':{en:'Reply',fa:'پاسخ'},
      'DeleteMessage':{en:'Delete Message',fa:'حذف پیام'},
      'DeletedMessage':{en:'Deleted Message',fa:'پیام حذف شده'},
      'WriteMessage':{en:'Write Message',fa:'نوشتن پیام'},
    }
    for(var globalization in translate){
      for(var key in globalization){
        if(dictionary[key]){
          dictionary[key][globalization] = globalization[key];
        }
      }
    }
    this.dictionary = dictionary;
  }
  translate(key){
    var {globalization} = this.props;
    return this.dictionary[key][globalization];
  }
  getValueByField(obj,field){
    if(!field || field === null){return undefined;}
    var fieldString = typeof field === 'function'?field(obj):field;
    if(!fieldString ||typeof fieldString !== 'string'){console.error('chatbox.getValueByField() receive invalid field'); return undefined}
    var fields = fieldString.split('.');
    var value = obj[fields[0]];
    if(value === undefined){return;}
    for(var i = 1; i < fields.length; i++){
      value = value[fields[i]];
      if(value === undefined || value === null){return;}
    }
    return value;
  }
  getMessageById(id){
    var {messages,dataset} = this.props;
    for(var i = 0; i < messages.length; i++){
      if(this.getValueByField(messages[i],dataset.id) === id){return messages[i]}
    }
  }
  getUploadIcon(){
    var {messageInput} = this.state;
    var {rtl} = this.props;
    var stroke = !messageInput?'#eee':'#777';
    var d1,d2;
    if(rtl){d1 = "M2 12 L22 4 L20 12 L22 20 L2 12"; d2 = "M3 12 L20 12 L3 12";}
    else {d1 = "M4 12 L2 4 L22 12 L2 20 L4 12"; d2 = "M4 12 L21 12 L4 12";}
    return (
      <svg width="24" height="24" style={{width: '24px',height:'24px'}}>
        <path strokeWidth={1} strokeLinecap="round" stroke={stroke} fill="rgba(0,0,0,0)" strokeLinejoin="miter" className="path" d={d1}></path><path strokeWidth="1" strokeLinecap="round" stroke={stroke} fill="rgba(0,0,0,0)" strokeLinejoin="miter" className="path" d={d2}></path>
      </svg>
    )
  }
  getAttachIcon(){
    return (
      <svg width="24" height="24" style={{width:'24px',height:'24px'}}><path strokeWidth="1" strokeLinecap="round" stroke="#000" fill="rgba(0,0,0,0)" strokeLinejoin="miter" d="M17 7 L7 7 q-5 0 -5 5 q0 5 5 5 L18 17 q4 0 4 -3 L22 13 q0 -3 -4 -3 L7 10 q-2 0 -2 2 q0 2 2 2 L17 14"></path></svg>
    )
  }
  getPreviewIcon(){
    return(
      <svg width="60" height="60" style="width: 60px; height: 60px; border: 1px solid; background-image: linear-gradient(rgb(221, 221, 221) 0px, transparent 0px), linear-gradient(90deg, rgb(221, 221, 221) 0px, transparent 0px), linear-gradient(rgb(221, 221, 221) 1px, transparent 1px), linear-gradient(90deg, rgb(221, 221, 221) 1px, transparent 1px); background-size: 1px 1px, 1px 1px;"><path stroke-width="1" stroke-linecap="round" stroke="#6b7c8e" fill="#6b7c8e" stroke-linejoin="miter" class="path" d="M43 43 L43 21 L35 13 L18 13 q-2 0 -2 2 L16 43 q0 2 2 2 L41 45 q2 0 2 -2"></path><path stroke-width="1" stroke-linecap="round" stroke="#a6aebf" fill="#a6aebf" stroke-linejoin="round" class="path" d="M35 13 L35 21 L43 21 L35 13"></path></svg>
    )
  }
  dragEnter(e) {
    e.stopPropagation();
    e.preventDefault();
    var {dragMode} = this.state;
    if(dragMode){return;}
    this.setState({dragMode:true})
  }
  dragOver(e) {
    e.stopPropagation();
    e.preventDefault();
  } 
  dragLeave(e){
    e.stopPropagation();
    e.preventDefault();
    this.setState({dragMode:false})
  }
  drop(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  keyDown(e){
    var code = e.keyCode;
    if(code === 13){
      this.upload();
    }
  }
  upload(files = []){
    var {onUpload} = this.props;
    var {replyId,messageInput} = this.state;
    if(!messageInput){return;}
    onUpload({files,text:messageInput,replyId});
    this.setState({dragMode:false,messageInput:'',replyId:false});
  }
  download({fileName,id,format}){
    var {onDownload} = this.props;
    onDownload({fileName,id,format})
  }
  render(){
    var {messages,userName,userId,dataset,header,rtl,onRemove} = this.props;
    var {dragMode,messageInput,replyId} = this.state;
    this.currentDate = false;
    var context = {
      dataset,userName,userId,onRemove,rtl,dragMode,replyId,
      getValueByField:this.getValueByField.bind(this),
      SetState:this.setState.bind(this),
      download:this.download.bind(this),
      upload:this.upload.bind(this),
      getMessageById:this.getMessageById.bind(this),
      translate:this.translate.bind(this),
      theme:this.theme,
    }
    return (
      <RChatBoxContext.Provider value={context}>
        <div ref={this.dom}
          className='r-chatbox' 
          onDrop={e => this.drop(e)}
          onDragOver={e => this.dragOver(e)}
          onDragEnter={e => this.dragEnter(e)}
          onDragLeave={e => this.dragLeave(e)}
          onKeyDown={this.keyDown.bind(this)}
          style={{background:this.theme.background,color:this.theme.color}}
        >
          {
            header &&
            <div className='r-chatbox-header' style={{direction:rtl?'rtl':'ltr'}}>
              {
                header.buttons && header.buttons.length &&
                header.buttons.map((hb,i)=>(
                  <div key={i} className={'r-chatbox-header-button'} title={hb.title} onClick={hb.onClick}>
                    <div className={hb.iconClass}></div>
                  </div>
                ))
              }
              <div className='r-chatbox-header-empty'>{header.title}</div>
              {
                header.onClose && <div className='r-chatbox-close' title={this.translate('Close')}></div>
              }
            </div>
          }
          <RChatboxBody messages={messages}/>
          <div className='r-chatbox-footer' style={{direction:rtl?'rtl':'ltr'}}>
            <div className='r-chatbox-footer-button' title={this.translate('UploadFile')}>
              <label className='r-chatbox-input-file'>
                <input type='file' onChange={(e)=>{
                  let files = e.target.files;
                  this.upload(files)
                }} multiple/>  
              </label>
              {this.getAttachIcon(messageInput)}
            </div>
            <input 
              type='text' placeholder={this.translate('WriteMessage')} value={messageInput} 
              onChange={(e)=>this.setState({messageInput:e.target.value})} style={{[rtl?'marginLeft':'marginRight']:messageInput?undefined:'12px'}}
            />
            {
              messageInput && 
              <div className='r-chatbox-footer-button' onClick={this.upload.bind(this)} title={this.translate('Send')}>{this.getUploadIcon(messageInput)}</div>
            }
          </div>
        </div>
      </RChatBoxContext.Provider>
    );
  }
}
RChatbox.defaultProps = {globalization:'en'};
class RChatboxBody extends Component{
  static contextType = RChatBoxContext;
  constructor(props){
    super(props);
    this.state = {}
  }
  sortByDate(messages){
    var {getValueByField,dataset} = this.context;
    var datedMessages = {};
    for(var i = 0; i < messages.length; i++){
      var message = messages[i];
      message._index = i;
      var date = getValueByField(message,dataset.date);
      datedMessages[date] = datedMessages[date] || [];
      datedMessages[date].push(message)
    }
    return datedMessages;
  }
  render(){
    var {dragMode,theme,replyId,getMessageById,SetState,rtl,translate} = this.context;
    var {messages} = this.props;
    var Messages = this.sortByDate(messages);
    var Items;
    if(dragMode){
      Items = <DropZone/>
    }
    else {
      Items = [];
      for(let prop in Messages){
        Items.push(
          <div key={prop} className='r-chatbox-date-container' onClick={()=>this.toggle(prop)}>
            <div className='r-chatbox-date' style={{color:theme.color,background:theme.messsageBachground,border:`3px solid ${theme.background}`}}>{prop}</div>
          </div>
        )
        for(let j = 0; j < Messages[prop].length; j++){
          Items.push(<Message key={prop + j} message={Messages[prop][j]}/>)
        }
      }
    }
    return (
      <div className='r-chatbox-body'>
        {Items}
        {
          replyId !== false &&
          <div className='r-chatbox-reply' style={{background:'#fff'}}>
            <div className='r-chatbox-reply-header' style={{direction:rtl?'rtl':'ltr'}}>
              <div className='r-chatbox-reply-header-title'>
                {translate('ReplyTo')}
              </div>
              <div className='r-chatbox-reply-header-close' onClick={()=>SetState({replyId:false})}></div>
            </div>
            <Message message={getMessageById(replyId)} isReply={true} style={{float:rtl?'right':'left'}} containerStyle={{padding:rtl?'0px 12px 0px 36px':'0px 36px 0px 12px'}}/>
          </div>
        }
      </div>
    )    
  }
}

class DropZone extends Component{
  static contextType = RChatBoxContext;
  drop(e) {
    e.stopPropagation();
    e.preventDefault();
    var {upload} = this.context;
    const dt = e.dataTransfer;
    const files = dt.files;
    upload(files);
  }
  render(){
    var {translate} = this.context;
  var content = <Fragment><span>+</span>{translate('DropFilesHere')}</Fragment>;
    return (
      <div className='r-chatbox-dropzone' onDrop={(e)=>this.drop(e)}>
      {content}
      </div>
    )
  }
}
class Message extends Component{
  static contextType = RChatBoxContext;
  render(){
    var {message,isReply,style = {},containerStyle = {}} = this.props;
    var {userId,dataset,getValueByField,theme} = this.context;
    var isMy = userId === getValueByField(message,dataset.ownerId);
    var background = isReply?theme.replyBackground:(!isMy?theme.messsageBachground:theme.myMessageBackground);
    var color = isMy?theme.myColor:theme.color;
    var id = getValueByField(message,dataset.id)
    var props = {isReply,message,isMy};
    var float = isMy?'right':'left'
    return (
      <div className={'r-chatbox-message-container' + (isMy?' is-my':' not-is-my')} id={id} style={containerStyle}>
        
        <div className={'r-chatbox-message'} style={{
          background,
          color:isReply?undefined:color,float,...style
        }}>
          {
            !isReply &&
            <div className='r-chatbox-arrow' style={{
              position:'absolute',borderTop:`8px solid ${background}`,[isMy?'right':'left']:'-8px'
            }}></div>
          }
          <MessageHeader {...props}/>
          <MessageReplyTo {...props}/>
          <MessageBody {...props}/>
          <MessageFooter {...props}/> 
        </div>
      </div>
    )
  }
}
class MessageAttachment extends Component{
  static contextType = RChatBoxContext;
  render(){
    var {isReply,message} = this.props;
    var {theme,rtl,download,dataset,getValueByField} = this.context;
    var fileName = getValueByField(message,dataset.attachmentTitle);
    var id = getValueByField(message,dataset.attachmentId);
    var format = getValueByField(message,dataset.attachmentFormat);
          
    return (
      <div
        className={'r-chatbox-attachment' + (isReply?' is-reply':'')} 
        onClick={isReply?undefined:()=>{
          download({fileName,id,format});
        }} 
        style={{direction:rtl?'rtl':'ltr'}}>
        <div className='r-chatbox-download' style={{background:theme.attachmentBackground}}>
          {
            isReply &&
            <svg width="24" height="24" style={{width:'24px',height:'24px'}}><path strokeWidth="2" strokeLinecap="round"  fill="#fff" strokeLinejoin="miter" d="M17 18 L7 18 L7 6 L14 6 L17 9 L17 18"></path></svg>
          }
          {
            !isReply &&
            <svg width="24" height="24" style={{width:'24px',height:'24px'}}><path strokeWidth="2" strokeLinecap="round" stroke="#fff" fill="rgba(0,0,0,0)" strokeLinejoin="miter" d="M12 7 L12 17 L12 7"></path><path strokeWidth="2" strokeLinecap="round" stroke="#fff" fill="rgba(0,0,0,0)" strokeLinejoin="round" d="M7 12 L12 17 L17 12"></path></svg>
          }
          
        </div>
        <span className='r-chatbox-attachment-title'>{fileName}</span>
      </div>
    );
  }
}

class MessageHeader extends Component{
  static contextType = RChatBoxContext;
  render(){
    var {isReply,message,isMy} = this.props;
    var {getValueByField,dataset,rtl,onRemove,SetState,translate} = this.context; 
    var ownerName = getValueByField(message,dataset.ownerName);
    var id = getValueByField(message,dataset.id);
    return (
      <div className='r-chatbox-message-header' style={{direction:rtl?'rtl':'ltr'}}>
        <div className='r-chatbox-message-owner'>{isMy?'You':ownerName}</div>
        <div style={{width:'12px'}}></div>
        {
          !isReply &&
          <RDropdownButton
            text={<div className='r-chatbox-message-options' style={{transform:`rotate(${rtl?-90:90}deg)`}}></div>}
            items={[{text:translate('Reply'),onClick:()=>SetState({replyId:id})},{text:translate('DeleteMessage'),onClick:()=>onRemove(message)}]}
            rtl={rtl}
            style={{color:'inherit'}}
            openRelatedTo='.r-chatbox-body'
          />
        }
      </div>
    )
  }
}
class MessageReplyTo extends Component{
  static contextType = RChatBoxContext;
  render(){
    var {isReply,message} = this.props;
    var {getValueByField,dataset,getMessageById,translate} = this.context; 
    var replyTo = getValueByField(message,dataset.replyTo);
    if(isReply){return '';}
    if(!replyTo){return '';}
    var message = getMessageById(replyTo);
    return (
      <a href={'#' + replyTo} className='r-chatbox-reply-to'>
        {
          message &&
          <Message message={message} isReply={true}/>
        }
        {
          !message &&
          <div style={{paddingBottom:'6px'}}>{translate('DeletedMessage')}</div>
        }
      </a>
    )
  }
}
class MessageFooter extends Component{
  static contextType = RChatBoxContext;
  render(){
    var {isReply,message} = this.props;
    var {getValueByField,dataset,rtl} = this.context; 
    if(isReply){return '';}
    var time = getValueByField(message,dataset.time);
    
    return (
      <div className='r-chatbox-message-footer' style={{direction:rtl?'rtl':'ltr'}}>
        {!isReply && <div className='r-chatbox-footer-time'>{time}</div>}
      </div>
    )
  }
}

class MessageBody extends Component{
  static contextType = RChatBoxContext;
  render(){
    var {isReply,message} = this.props;
    var {getValueByField,dataset,rtl} = this.context; 
    var text = getValueByField(message,dataset.text);
    if(text){
      var style = {overflow:'hidden',textOverflow:'ellipsis',direction:rtl?'rtl':'ltr'};
      if(isReply){style.maxHeight = '40px';}
      return <div className='r-chatbox-text' style={style}>{text}</div>
    }
    return <MessageAttachment isReply={isReply} message={message}/>
  }
}
