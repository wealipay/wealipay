/**
 * 
 * 开启横杠模式的url
 */
jQuery.extend({
    goToPage: function(page, e) {
        var url = window.location.href;
        if (url.indexOf("-p-") === -1) {
            //url += "-p-" + page + ".html";
            url=url.replace('.html','-p-'+page+ ".html")
        }
        else {
            var urlArr = url.split("-p-");
            url=urlArr[0]+"-p-"+page+".html";
        }
        window.location.href = url;
    },
    U: function(url) {
//        console.log(url)
        url = url.split("?", 2);
//        console.log(url)
        url[0] = url[0].replace(/\//g, '-');
        return url.join("?");
    }

});

// jQuery.extend({
//    goToPage: function(page, e) {
//        var url = window.location.href;
//        url = url.replace(".html", "");
//        if (url.indexOf("/p/") === -1) {
//            url += "/p/" + page + ".html";
//        } else {
//            var url_length = url.split("/p/")[1].length;
//            url = url.substring(0, url.length - url_length);
//            url += page + ".html";
//        }
//        window.location.href = url;
//    },
//    U: function(url) {
//        return url;
// //        url = url.split("?",2);
// //        url[0] = url[0].replace(/\//g, '-');
// //        return url.join("?");
//    }

// });


//最新公告
function noticeRoll() {
     
    $(".notice-box").each(function(i) {
        var count = $(this).find("ul.notice-ul li").length;
        var active = $(this).find("ul.notice-ul").data('notice_active');
        active = isNaN(parseInt(active)) ? 0 : parseInt(active);
        var next = active + 1;
        next = next >= count ? 0 : next;
        $(this).find(" ul.notice-ul").data('notice_active', next);
        var active_obj = $(this).find("ul.notice-ul").find('li').eq(active);
        var next_obj = $(this).find("ul.notice-ul").find('li').eq(next);
        $(active_obj).fadeOut("slow", function() {
            $(next_obj).removeClass("hidden").fadeIn("slow");
        });
    });

}
function reflush() {
    document.getElementById('verify_img').src = "/Public-verify_c.html?" + Math.random();
}

function check() {
    var length = $('#content').val().length;
    if (length > 501) {
        alert('留言内容超过500字，无法提交！');
        return false;
    }
    $.ajax({
        type: "POST",
        url: $.U("Feedback/save.html"),
        data: {
            'subject': $("#subject").val(),
            'content': $("#content").val(),
            'sender_name': $("#sender_name").val(),
            'sender_tel': $("#sender_tel").val(),
            'sender_email': $("#sender_email").val(),
            'verify': $("#verify").val(),
            'feedback_type': "info"
        },
        success: function(message) {

            if ("ActiveXObject" in window) {
                window.location.reload();
                alert(message.info);
            } else {
                if (message.s == 1) {
                    $("#subject").val('');
                    $("#content").val('');
                    $("#sender_name").val('');
                    $("#sender_tel").val('');
                    $("#sender_email").val('');
                    $("#verify").val('');
                }
                reflush();
                $('#myModal').modal('hide').remove();
                $('.modal-backdrop').remove();
                var html = '<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
                html += '<div class="modal-dialog">';
                html += '<div class="modal-content">';
                html += '<div class="modal-header">';
                html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
                html += '<h3 id="myModalLabel" id="myModalLabel">提示信息</h3>';
                html += '</div>';
                html += '<div class="modal-body">';
                html += '<p>' + message.info + '</p>';
                html += '</div>';
                html += '<div class="modal-footer">';
                html += '<button class="btn" data-dismiss="modal">关闭</button>';
                html += '</div>';
                html += '</div></div></div>';
                $('body').append(html);
                $('#myModal').modal('show');
            }
        },
        error: function(data) {
            alert('提交失败');
        }
    });
}

function inqueryCheck() {
    var length = $('#content').val().length;
    if (length > 501) {
        alert('留言内容超过500字，无法提交！');
        return false;
    }
    var pro_desc = $("input[name='pro_desc']:checked").serializeArray();
    $.ajax({
        type: "POST",
        url: $.U("Feedback/save.html"),
        data: {
            'subject': $("#subject").val(),
            'pid': $("#pid").val(),
            'content': $("#content").val(),
            'total': $("#total").val(),
            'expect_price': $("#expect_price").val(),
            'pro_desc': pro_desc,
            'others': $("#others").val(),
            'sender_email': $("#sender_email").val(),
            'sender_tel': $("#sender_tel").val(),
            'sender_name': $("#sender_name").val(),
            'verify': $("#verify").val()
        },
        success: function(message) {
            if ("ActiveXObject" in window) {
                window.location.reload();
                alert(message.info);
            } else {
                if (message.s == 1) {
                    $("#subject").val('');
                    $("#pid").val('');
                    $("#content").val('');
                    $("#total").val('');
                    $("#expect_price").val('');
                    $("#others").val('');
                    $("#sender_name").val('');
                    $("#sender_tel").val('');
                    $("#sender_email").val('');
                    $("#verify").val('');
                    $("input[name='pro_desc']").removeAttr("checked");
                }
                reflush();
                $('#myModal').modal('hide').remove();
                $('.modal-backdrop').remove();
                var html = '<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
                html += '<div class="modal-dialog">';
                html += '<div class="modal-content">';
                html += '<div class="modal-header">';
                html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
                html += '<h3 id="myModalLabel" id="myModalLabel">提示信息</h3>';
                html += '</div>';
                html += '<div class="modal-body">';
                html += '<p>' + message.info + '</p>';
                html += '</div>';
                html += '<div class="modal-footer">';
                html += '<button class="btn" data-dismiss="modal">关闭</button>';
                html += '</div>';
                html += '</div></div></div>';
                $('body').append(html);
                $('#myModal').modal('show');
            }
        },
        error: function(data) {
            alert('提交失败');
        }
    });
}
//留言
$(document).ready(function() {

    $('#inquiryForm').submit(function() {
        $.ajax({
            url: '/Feedback-save',
            data: $('#inquiryForm').serialize(),
            type: 'POST',
            ajaxPost: true,
            success: function(response) {
                reflush();
                del()
                var html = '<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
                html += '<div class="modal-dialog">';
                html += '<div class="modal-content">';
                html += '<div class="modal-header">';
                html += '<button type="button" class="close" aria-hidden="true" onclick="$(\'#inquiryForm\')[0].reset();del();">×</button>';
                html += '<h3 id="myModalLabel" id="myModalLabel">提示信息</h3>';
                html += '</div>';
                html += '<div class="modal-body">';
                html += '<p>' + response.info + '</p>';
                html += '</div>';
                html += '<div class="modal-footer">';
                if(response.info=="提交成功！！"){
                 html += '<a href="Message.html" class="btn btn-success">关闭</a>';
            }
                else{
                html += '<button class="btn" onclick="del()">关闭</button>';
                }
                html += '</div>';
                html += '</div></div></div>';
                $('body').append(html);
                $('#myModal').modal('show');

            }
        });
        return false;
    });
});
function del(){
    $('#myModal').modal('hide');
    $("#myModal").remove();
    $(".modal-backdrop").remove();
}
function MemberLogout() {
    $.ajax({
        type: "POST",
        url: $.U("Public/logout.html"),
        data: '',
        success: function(response) {
            if (response.status == 1) {
                window.location.reload();
            }
        }
    });
}
//一键登录
function universalLogin(uid){
    $.ajax({
        "type":"post",
        "async":false,
        "url":"/MemberCenter-universal",
        "data":"uid="+uid,
        "success":function(rel){
            if(rel.s==1){
                var justLoginObj = $('#justLogin');
                if(justLoginObj.length == 0){
                    var iframe = '<iframe id="justLogin" src="'+rel.url+'" width=1 height=1></iframe>';
                    $('body').append(iframe);
                }
                window.open('/admin/',"_blank");
            }
        }
    });
	return false;
}

$(document).ready(function() {
    
    $.ajax({
        type: "POST",
        url: $.U("Public/getSession"),
        data: "url=" + window.location.href,
        dataType: "json",
        success: function(response) {
            var html = "<div class='top-l welcome'></div><div class='top-r'>";
            var headLink;
            var member_html;

            if (response.headLinkInfo != null) {//是否有顶部连接
                var headLinkArray = new Array();
                for(var i in response.headLinkInfo){
                    var headLinkItem = response.headLinkInfo[i];
                    if(typeof headLinkItem.title != 'undefined' && $.trim(headLinkItem.title) != '' ){
                        var headLinkLine =  "<a href='" + headLinkItem.link + "' target='" + headLinkItem.link_window + "'>" + headLinkItem.title + "</a> &nbsp; &nbsp;";
                        headLinkArray.push(headLinkLine);
                    }
                }
                headLink = headLinkArray.join("");
            } else {
                headLink = '';
            }
            html += headLink;
            if (response.is_member == 1) {//是否开通会员
                if (response.session != null && response.session.id > 0) {//是否已经登录
                    //站点管理
                    var management = response.management;
                    
                    member_html = "<a href='" + $.U("MemberCenter/index.html") + "' class='common_user_name'>" + response.session.member_name + "</a> " + response.lang.hello + "！" + response.lang.welcome + "！</div>";
                    member_html += "<div class='top-r'><div class='logined'><span class='shopping-car'><i class='icon shopping-car'></i> <a href='" + $.U("Cart/sortedDynamic.html") + "' class='cart'>" + response.lang.shopping_cart + "</a></span><span class='user-exit'><a href='" + $.U("MemberCenter/index.html") + "'>" + response.lang.member_center + "</a></span>"+management+"<span class='user-exit'>  <a href='javascript:;' onclick='MemberLogout()' style='margin-right:5px;'>"+ response.lang.loginout +"</a></span> </div><div class='cl'></div>";
                } else {
                    if (response.agent_uid > 0) {//是不是OEM
                        if (response.agent_uid == 3527 || response.agent_uid == 3514) {
                            member_html = "<a href='" + $.U("Admin/login.html?return_url=" + window.location.pathname) + "' class='login'>"+ response.lang.login +"</a>丨<a href='" + $.U("Admin/register.html") + "' class='reg'>"+response.lang.register+"</a></div><div class='cl'></div>";
                        } else {
                            member_html = "<a href='" + $.U("Public/login.html?return_url=" + window.location.pathname) + "' class='login'>"+ response.lang.login +"</a>丨<a href='" + $.U("Admin/register.html") + "' class='reg'>"+response.lang.register+"</a></div><div class='cl'></div>";
                        }
                    } else {//
                        member_html = "<a href='" + $.U("Public/login.html?return_url=" + window.location.pathname) + "' class='login'>"+ response.lang.login +"</a>丨<a href='" + $.U("Public/register.html") + "' class='reg'>"+response.lang.register+"</a></div><div class='cl'>";
                    }
                }
                html += member_html;
            }

            html += "</div>";
            $("#top_menu").html(html);
        }
    });
function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        { 
            c_start=c_start + c_name.length+1 
            c_end=document.cookie.indexOf(";",c_start)
        if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        } 
    }
    return ""
}
//定时记录音乐播放时间
function mt(){
    var audio=document.getElementById("audio");
    var time = audio.duration;
    var timer = null;
    timer = setInterval(function(){
        var currentTime = audio.currentTime;
        if(currentTime < time){
            setCookie("currentTime", currentTime);
        }else{
            audio.play();
            time = audio.duration;
            setCookie("currentTime", currentTime);
        }
    },1000);
}


    //搜索框
    $("form[role='search']").find("ul[role='menu'] li a").on("click", function() {
        var searchInputId = $(this).attr("data-role");
        if(typeof $('#keywords') != 'undefined'){
            if(searchInputId == 'chinaSoSearchUrl' ){
                $('#keywords').attr('name','q');
                $('form[role="search"]').attr('method','GET');
                $('form[role="search"]').attr('target','_blank');
            }else{
                $('#keywords').attr('name','name');
                $('form[role="search"]').attr('method','POST');
                $('form[role="search"]').attr('target','_self');
                
            }
        }

        
        $(this).parents(".btn-search-group").find(".btn-search").html($(this).html());
        $(this).parents("form[role='search']").attr("action", $("#" + searchInputId).val());
    });


    //最新公告
    setInterval("noticeRoll()", 6000);
    //banner转动
    if ($('#myCarousel .carousel-indicators li').length > 0) {
        $('#myCarousel').carousel({
            interval: 5000
        })
    }
    //详情页图片滚动
    if ($('#ProductimgBox').length > 0) {
        var ProductUlW = 80 * $('.ProductimgSmall li').length;
        $('.ProductimgSmall ul').css('width', ProductUlW);//给ul宽度
        $('.ProductimgSmall li').on('click', function() {//点击切换大图
            var thisClass = $(this).attr('class');
            $('.ProductimgSmall li').removeClass('active');
            var thisSrc = $(this).find('img').attr('src');
            $(this).addClass('active');
            $('.ProductimgBox li img').attr('src', thisSrc).attr('class', thisClass);
        })

        var ProWidth = $('.ProductimgSmall').width();
        if ($('.ProductimgSmall ul').width() > ProWidth) {//判断有没有下一页
            $('#ProductimgRight').addClass('active');
            $('#ProductimgLeft').addClass('active');
        }
        var liLenght = $('.ProductimgSmall li').length;
        $('#ProductimgRight').on('click', function() {//点击右滚动

            // }//滚动一页
            if (i < liLenght) {
                var Differ = $('.ProductimgSmall ul').width() - $('.ProductimgSmall').width();
                if (-$('.ProductimgSmall ul').position().left <= Differ) {
                    $('.ProductimgSmall ul').animate({left: -80 * i + 5}, 200);
                    i++;
                }
            } else {
                $('.ProductimgSmall ul').animate({left: '5px'}, 200);
                i = 1;
            }
        })
        $('#ProductimgLeft').on('click', function() {//点击左滚动
            // }//滚动一页
            var ProSmaleft = -80 * (i - 1) + 80 + 5 + 'px';
            if (i <= 1) {
                i = 1;
            } else {
                $('.ProductimgSmall ul').animate({left: ProSmaleft}, 200);
                i--;
            }

        })
    }

    var isIE = !!window.ActiveXObject;
    var isIE6 = isIE && !window.XMLHttpRequest;
    var isIE8 = isIE && !!document.documentMode;
    var isIE7 = isIE && !isIE6 && !isIE8;
    if (isIE && isIE6 || isIE7 || isIE8) { //ie判断
        //详情图片点击放大
        $('#clockBig').on('click', function() {
            var thisClass = '.' + $('#clockBig img').attr('class');
            $('#BigImg').css('display', 'block');
            $(".imgBoxTable img").css('display', 'none');
            $(".imgBoxTable " + thisClass + "").css('display', 'block');
            $('#BigImg').addClass('active');
            $(".imgBoxTable " + thisClass + "").addClass('active');
            $('#imgBoxTable img').show();
        });
        //详情图片点击关闭
        $('#closeBigImg').on('click', function() {
            $('#BigImg img').removeClass('active');
            $(".imgBoxTable img").css('display', 'none')
            $('#BigImg').css('display', 'none');
        });

        var imgLength = $('.imgBoxTable img').length;
        var i = 0;
        //下一页
        $('.BigImg .right').on('click', function() {
            var thisData = $(".imgBoxTable .active").attr('data');
            var thisElement = $(".imgBoxTable .active");
            if (thisData < imgLength) {
                $(".imgBoxTable img").removeClass('active')
                $(".imgBoxTable img").css('display', 'none');
                thisElement.next().css('display', 'block').addClass('active');
            }
        })
        //上一页
        $('.BigImg .left').on('click', function() {
            var thisData = $(".imgBoxTable .active").attr('data');
            var thisElement = $(".imgBoxTable .active");
            if (thisData > 0) {
                $(".imgBoxTable img").removeClass('active')
                $(".imgBoxTable img").css('display', 'none');
                thisElement.prev().css('display', 'block').addClass('active');
            }
        })

    } else {
        //详情图片点击放大
        $('#clockBig').on('click', function() {
            var thisClass = '.' + $('#clockBig img').attr('class');
            $('#BigImg').css('display', 'block');
            $(".imgBoxTable img").css('display', 'none');
            $(".imgBoxTable " + thisClass + "").css('display', 'block');
            $('#imgBoxTable img').show();
            setTimeout(function() {
                $('#BigImg').addClass('active');
                $(".imgBoxTable " + thisClass + "").addClass('active');
            }, 50);
        });
        //详情图片点击关闭
        $('#closeBigImg').on('click', function() {
            $('#BigImg img').removeClass('active');
            $(".imgBoxTable img").css('display', 'none')
            setTimeout(function() {
                $('#BigImg').css('display', 'none');
            }, 300);
        });
        var imgLength = $('.imgBoxTable img').length - 1;
        var i = 0;
        //下一页
        $('.BigImg .right').on('click', function() {
            var thisData = $(".imgBoxTable .active").attr('data');
            var thisElement = $(".imgBoxTable .active");
            if (thisData < imgLength) {
                $(".imgBoxTable img").removeClass('active')
                setTimeout(function() {
                    $(".imgBoxTable img").css('display', 'none');
                    thisElement.next().css('display', 'block');
                }, 300);
                setTimeout(function() {
                    thisElement.next().addClass('active');
                }, 350);
            }
            ;
        })
        //上一页
        $('.BigImg .left').on('click', function() {
            var thisData = $(".imgBoxTable .active").attr('data');
            var thisElement = $(".imgBoxTable .active");
            if (thisData > 0) {
                $(".imgBoxTable img").removeClass('active')
                setTimeout(function() {
                    $(".imgBoxTable img").css('display', 'none');
                    thisElement.prev().css('display', 'block');
                }, 300);
                setTimeout(function() {
                    thisElement.prev().addClass('active');
                }, 350);
            }
        })
    }

    /*2级分类展开*/
    if ($('#ProClass').length) {
        $('#ProClass li.ac .first').attr('href', 'javascript:;');
        function clearAll() {
            $('#ProClass li .classBox').css('height', '0');
            $('#ProClass li').removeClass('Selection');
        }
        $('#ProClass li.ac').on('click', function() {
            var liH = $(this).find('.first').height() + 7;
            H = $(this).find('.classBox .classBoxLi').size() * liH,
                    obj = $(this).find('.classBox'),
                    obj2 = $(this);
            if (obj2.hasClass('Selection')) {
                $('#ProClass').removeClass('ac');
                $('#ProClass li .classBox').animate({
                    height: '0'
                }, 300);
                setTimeout(function() {
                    $('#ProClass li').removeClass('Selection');
                }, 300);
            } else {
                $('#ProClass').addClass('ac');
                $('#ProClass .classBox').css('top', liH);
                clearAll();
                obj2.addClass('Selection');
                obj.animate({
                    height: H
                }, 300);
            }
        });
        $('.ProClassBg').on('click', function() {
            $('#ProClass').removeClass('ac');
            $('#ProClass li .classBox').animate({
                height: '0'
            }, 300);
            setTimeout(function() {
                $('#ProClass li').removeClass('Selection');
            }, 300);
        });
    }

    /*2级分类展开left*/
    if ($('#ProClassLeft').length) {
        $(document).ready(function() {
            $('#ProClassLeft li.ac .first').attr('href', 'javascript:;');
            var dd = $('#ProClassLeft li.ac').find('.gg');
            if(dd.hasClass('gg')){
                var thisobj = dd;
                var AH =thisobj.find('a').height();
                var BoxH = thisobj.find('a').length * AH;
                thisobj.animate({height: BoxH}, 500).addClass('ac');
            }
            $('#ProClassLeft li.ac').on('click', function() {
                var thisobj = $(this).find('.classBox');
                var AH = $(this).find('a').height();
                var BoxH = thisobj.find('a').length * AH;
                if (thisobj.hasClass('ac')) {
                    thisobj.parent().find('.first').removeClass('Themebg').removeClass('acc');
                    thisobj.animate({height: '0'}, 500).removeClass('ac');
                } else {
                    thisobj.parent().find('.first').addClass('Themebg').addClass('acc');
                    thisobj.animate({height: BoxH}, 500).addClass('ac');
                }
            })
        })
    }
	
	//内页设计
    if ($('#md_detailProductClass,.two_menu_js').length) {
        $(document).ready(function() {
            $('#md_detailProductClass li.ac .first,.two_menu_js li.ac .first').attr('href', 'javascript:;');
            var dd = $('#md_detailProductClass li.ac,.two_menu_js li.ac').find('.gg');
            if(dd.hasClass('gg')){
                var thisobj = dd;
                var AH =thisobj.find('a').height();
                var BoxH = thisobj.find('a').length * AH;
                thisobj.animate({height: BoxH}, 500).addClass('ac');
            }
            $('#md_detailProductClass li.ac,.two_menu_js li.ac').on('click', function() {
                var thisobj = $(this).find('.classBox');
                var AH = $(this).find('a').height();
                var BoxH = thisobj.find('a').length * AH;
                if (thisobj.hasClass('ac')) {
                    thisobj.parent().find('.first').removeClass('Themebg').removeClass('acc');
                    thisobj.animate({height: '0'}, 500).removeClass('ac');
                } else {
                    thisobj.parent().find('.first').addClass('Themebg').addClass('acc');
                    thisobj.animate({height: BoxH}, 500).addClass('ac');
                }
            })
        })
    }

	// if ($('.two_menu_js').length){
 //        $(document).ready(function() {
 //            $('.two_menu_js li.ac .first').attr('href', 'javascript:;');
 //            var dd = $('.two_menu_js li.ac').find('.gg');
 //            if(dd.hasClass('gg')){
 //                var thisobj = dd;
 //                var AH =thisobj.find('a').height();
 //                var BoxH = thisobj.find('a').length * AH;
 //                thisobj.animate({height: BoxH}, 500).addClass('ac');
 //            }
 //            $('.two_menu_js li.ac').on('click', function() {
 //                var thisobj = $(this).find('.classBox');
 //                var AH = $(this).find('a').height();
 //                var BoxH = thisobj.find('a').length * AH;
 //                if (thisobj.hasClass('ac')) {
 //                    thisobj.parent().find('.first').removeClass('Themebg').removeClass('acc');
 //                    thisobj.animate({height: '0'}, 500).removeClass('ac');
 //                } else {
 //                    thisobj.parent().find('.first').addClass('Themebg').addClass('acc');
 //                    thisobj.animate({height: BoxH}, 500).addClass('ac');
 //                }
 //            })
 //        })
 //    }
	
    $('body').append('<!-- JS储存在User/View/Design/title.html --><div class="common_gototop"><img src="http://static.files.mozhan.com/Public/Images/hy/gototop.png" alt="" /></div>');
    $(".common_gototop").click(function() {
        $("html,body").animate({scrollTop: 0}, 1500);
    });
});
//导航二级分类效果
if($('#NavBoxPublic').length){
    function NavBtn(){
        $('#NavBoxPublic').css('height',$(window).height()-56);
        if($('.NavBoxPublic').hasClass('active')){
            $('#NavBoxBg').removeClass('active');
            $('.NavBoxPublic').removeClass('active');
            setTimeout(function(){
                $('#NavBoxBg').hide();
                $('.NavBoxPublic').hide();
            },500);
        }else{
            $('#NavBoxBg').show();
            $('.NavBoxPublic').show();
            setTimeout(function(){
                $('#NavBoxBg').addClass('active');
                $('.NavBoxPublic').addClass('active');
            },50);

        }
    }
    $('#NavBtn').on('click',function(){
        NavBtn();
    });
    $('#NavBoxBg').on('click',function(){
        NavBtn();
    });

    $('#NavBoxPublic .TriangleBtn').on('click',function(){
        var NavBoxli = $(this).parent().find('ul li');
        var H = NavBoxli.size()*NavBoxli.height();
        if($(this).hasClass('active')){
            NavBoxli.parent('ul').css('height','0');
            $(this).removeClass('active');
        }else{
            NavBoxli.parent('ul').css('height',H);
            $(this).addClass('active');
        }
    });
}

/*! Lazy Load 1.9.5 - MIT license - Copyright 2010-2015 Mika Tuupola */
!function(a, b, c, d) {
    var e = a(b);
    a.fn.lazyload = function(f) {
        function g() {
            var b = 0;
            i.each(function() {
                var c = a(this);
                if (!j.skip_invisible || c.is(":visible"))
                    if (a.abovethetop(this, j) || a.leftofbegin(this, j))
                        ;
                    else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
                        if (++b > j.failure_limit)
                            return!1
                    } else
                        c.trigger("appear"), b = 0
            })
        }
        var h, i = this, j = {threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: b, data_attribute: "original", skip_invisible: !1, appear: null, load: null, placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};
        return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function() {
            return g()
        }), this.each(function() {
            var b = this, c = a(b);
            b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function() {
                if (!this.loaded) {
                    if (j.appear) {
                        var d = i.length;
                        j.appear.call(b, d, j)
                    }
                    a("<img />").bind("load", function() {
                        var d = c.attr("data-" + j.data_attribute);
                        c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
                        var e = a.grep(i, function(a) {
                            return!a.loaded
                        });
                        if (i = a(e), j.load) {
                            var f = i.length;
                            j.load.call(b, f, j)
                        }
                    }).attr("src", c.attr("data-" + j.data_attribute))
                }
            }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function() {
                b.loaded || c.trigger("appear")
            })
        }), e.bind("resize", function() {
        g()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b) {
            b.originalEvent && b.originalEvent.persisted && i.each(function() {
                a(this).trigger("appear")
            })
        }), a(c).ready(function() {
            g()
        }), this
    }, a.belowthefold = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold
    }, a.rightoffold = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold
    }, a.abovethetop = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()
    }, a.leftofbegin = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()
    }, a.inviewport = function(b, c) {
        return!(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
    }, a.extend(a.expr[":"], {"below-the-fold": function(b) {
            return a.belowthefold(b, {threshold: 0})
        }, "above-the-top": function(b) {
            return!a.belowthefold(b, {threshold: 0})
        }, "right-of-screen": function(b) {
            return a.rightoffold(b, {threshold: 0})
        }, "left-of-screen": function(b) {
            return!a.rightoffold(b, {threshold: 0})
        }, "in-viewport": function(b) {
            return a.inviewport(b, {threshold: 0})
        }, "above-the-fold": function(b) {
            return!a.belowthefold(b, {threshold: 0})
        }, "right-of-fold": function(b) {
            return a.rightoffold(b, {threshold: 0})
        }, "left-of-fold": function(b) {
            return!a.rightoffold(b, {threshold: 0})
        }})
}(jQuery, window, document);
/*延迟加载图片js*/



