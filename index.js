layui.use( function(){
  let layer = layui.layer
  let date = new Date()
  if( date.getHours() > 12 ){
    layer.msg( "下午好 喝杯茶开始愉快的工作吧", {
      icon : 6,
      title : "FreeDayO 工具箱"
    })
  } else {
    layer.msg( "上午好 喝杯咖啡开始愉快的工作吧", {
      icon : 6,
      title : "FreeDayO 工具箱"
    })
  }
})
function joinUs(){
  layui.use( "layer", function(){
    let layer = layui.layer
    layer.open({
      type : 1,
      title : "加入我们？",
      icon : 6,
      content : "<div style='padding: 1%;'>想加入我们进行开发？<br>或者在开发组里展示您的特长？<br>不用管群问题 会什么写什么<br>请加入以下群聊进行申请<br>直接加入开发组群: 798634079<br>闲聊群: 822693016</div>",
      skin: "layui-layer-lan",
      area : [ "300px", "200px" ],
      btn : [ "现在进群聊天", "进开发群" ],
      btn1 : function(){
        window.location.href= "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=hcGZlV_FLiHl0LDjaupHcdCbA2ngVXT3&authKey=BS5snyGYu4VqE2yP1xIzFKJWT41qxFCGeQNMT9As%2FouqVMp9Ox%2BLJVOBUviUKtRJ&noverify=0&group_code=822693016"
      },
      btn2 : function(){
        window.location.href= "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Nyf65dKouNMxI_istYS0-CBaWEdZM592&authKey=LRPZgmb%2Biod6xEg%2B1XyOmAYaVWTaDe7xDkpfDXzeqGFJoUwu7uFDAQVaB9LGYjB3&noverify=0&group_code=798634079"
      },
      cancel : function(){
        layer.msg( "我们随时欢迎您哦", {
          icon : 6
        })
        return true
      }
    })
  })
}