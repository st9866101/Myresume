
(function () {
  //This method NOT support IE8
  // ------------------------------
  // HTML Template:
  // ------------------------------
  // <div class="item">
  //     <p class="copy-area">this it copy-area for test</p>
  //     <input type="text" value="Copy This Text" class="copy-area">
  //     <button type="button" class="btn-copy">copy</button>
  // </div>
  // ------------------------------
  document.addEventListener("DOMContentLoaded", function () {
      // 取得所有有 .item 類別的 DMO 元素
 var btn3 = document.getElementById('btn3');
    var clipboard3 = new Clipboard(btn3, {
        text: function() {
             alert("复制成功 请加入精采人生");
            return 'abn123';  
        }
        
    });
          });
      }
  });
})();