String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash+12;
}
let generate=()=>{
  password=(username.value.hashCode()/2).toString();
username.value=password;
}
let block=()=>{
  let comment_url="https://vote.pollcode.com/24697239_result_comment_process";
	let data=`name=${localStorage.User || "unknown"}&comment=${hash_id.value}&poll=24697239`;
	fetch(comment_url,{method:"POST",body:data})
document.write("Message Pinned Successfully");
};
let pin=()=>{
   let comment_url="https://vote.pollcode.com/24697239_result_comment_process";
	let data=`name=${localStorage.User || "unknown"}&comment=MMM${message.value}MMM&poll=24697239`;
	fetch(comment_url,{method:"POST",body:data})
  document.write("Message Pinned Successfully")
};
let load=(url)=>{
  let regex=/H&.*?</gm;
  fetch(url).then((data=>data.text())).then((data)=>{
    let array=data.match(regex).map(filter_data);
    textarea.value+=JSON.stringify(array);
  })
}
let filter_data=(data)=>{
  data=data.replace('<',"")
  data=data.replace('&#35;',"#");
  data=data.replace('&#58;',":");
  data=data.replace(/&#46;/g,"."); 
  return data
}

function pulldata() {
url="https://bypass-cors.vercel.app/cors.py?url=https://vote.pollcode.com/15917591_result_page_"+pull_id.value;
load(url);
}