$(document).ready(function() {
  $(".standard span").mouseover(function() {
    $(this).addClass("check-standard");
  });
  $(".standard span").mouseout(function() {
    $(this).removeClass("check-standard");
  });
  $(".standard span").click(function() {
    $(this)
      .siblings()
      .removeClass("checked-standard");
    $(this).addClass("checked-standard");
  });
  //产品数量 减号按钮
  function reduce() {
    var pcount = parseInt(
      $(this)
        .parent()
        .find(".p-count")
        .val()
    );
    if (pcount <= 1) {
      $(this)
        .parent()
        .find(".p-count")
        .val("1");
    } else {
      $(this)
        .parent()
        .find(".p-count")
        .val(pcount - 1);
    }
  }
  $(".reduce-count").bind("click", reduce);
  //产品数量 增加按钮
  var plus = function() {
    var pcount = parseInt(
      $(this)
        .parent()
        .find(".p-count")
        .val()
    );
    $(this)
      .parent()
      .find(".p-count")
      .val(pcount + 1);
  };
  $(".plus-count").bind("click", plus);
  function del() {
    $("#myModal").remove();
    $(".modal-backdrop").remove();
  }
  //加入购物车
  $(".add-to-cart").click(function() {
    var standardNum = $(".standard").length;
    var standards = new Array();
    for (var i = 1; i <= standardNum; i++) {
      var standardsItem = $("tr[data-id='standard" + i + "']").find(
        ".checked-standard"
      );

      standards[i - 1] = standardsItem.html();
      if (!standards[i - 1]) {
        var tips = $("#no_standard").html();
        del();
        var html =
          '<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
        html += '<div class="modal-dialog">';
        html += '<div class="modal-content">';
        html += '<div class="modal-header">';
        html +=
          '<button type="button" class="close" aria-hidden="true" onclick="$(\'#inquiryForm\')[0].reset();del();">×</button>';
        html +=
          '<h3 id="myModalLabel" id="myModalLabel">' +
          $("#message_bt").html() +
          "</h3>";
        html += "</div>";
        html += '<div class="modal-body">';
        html += "<p>" + tips + "</p>";
        html += "</div>";
        html += '<div class="modal-footer">';
        html +=
          '<button class="btn" onclick="del()">' +
          $("#close_bt").html() +
          "</button>";
        html += "</div>";
        html += "</div></div></div>";
        $("body").append(html);
        $("#myModal").modal("show");
        return false;
      }
      $("#standard" + i).val(standards[i - 1]);
    }
    var pcount = $(".p-count").val();
    var action = $(this).attr("data-url");
    if (!pcount) {
      return false;
    }
    $("#pcount").val(pcount);
    $("#cartAndOrderForm").attr("action", action);
    $("#cartAndOrderForm").submit();
  });
  //立刻购买
  $(".get-order-info").click(function() {
    var standardNum = $(".standard").length;
    var standards = new Array();
    for (var i = 1; i <= standardNum; i++) {
      var standardsItem = $("tr[data-id='standard" + i + "']").find(
        ".checked-standard"
      );

      standards[i - 1] = standardsItem.html();
      if (!standards[i - 1]) {
        var tips = $("#no_standard").html();
        alert(tips);
        return false;
      }
      $("#standard" + i).val(standards[i - 1]);
    }
    var pcount = $(".p-count").val();
    var action = $(this).attr("data-url");
    if (!pcount) {
      return false;
    }
    $("#pcount").val(pcount);
    $("#cartAndOrderForm").attr("action", action);
    $("#cartAndOrderForm").submit();
  });
});
