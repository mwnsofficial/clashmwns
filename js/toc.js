// https://github.com/ghiculescu/jekyll-table-of-contents
(function($){
  $.fn.toc = function(options) {
    var defaults = {
      noBackToTopLinks: false,
      title: '',
      minimumHeaders: 3,
      headers: 'h1, h2, h3, h4',
      listType: 'ol', // values: [ol|ul]
      showEffect: 'show', // values: [show|slideDown|fadeIn|none]
      showSpeed: 'slow' // set to 0 to deactivate effect
    },
    settings = $.extend(defaults, options);

    var headers = $(settings.headers).filter(function() {
      // get all headers with an ID
      var previousSiblingName = $(this).prev().attr( "name" );
      if (!this.id && previousSiblingName) {
        this.id = $(this).attr( "id", previousSiblingName.replace(/\./g, "-") );
      }
      return this.id;
    }), output = $(this);
    if (!headers.length || headers.length < settings.minimumHeaders || !output.length) {
      return;
    }

    if (0 === settings.showSpeed) {
      settings.showEffect = 'none';
    }

    var render = {
      show: function() { output.hide().html(html).show(settings.showSpeed); },
      slideDown: function() { output.hide().html(html).slideDown(settings.showSpeed); },
      fadeIn: function() { output.hide().html(html).fadeIn(settings.showSpeed); },
      none: function() { output.html(html); }
    };

    var get_level = function(ele) { return parseInt(ele.nodeName.replace("H", ""), 10); }
    var highest_level = headers.map(function(_, ele) { return get_level(ele); }).get().sort()[0];
    var return_to_top = '<i class="icon-arrow-up back-to-top"> </i>';

    var level = get_level(headers[0]),
      this_level,
      html = settings.title + " <"+settings.listType+">";
    headers.on('click', function() {
      if (!settings.noBackToTopLinks) {
        window.location.hash = this.id;
      }
    })
    .addClass('clickable-header')
    .each(function(_, header) {
      this_level = get_level(header);
      if (!settings.noBackToTopLinks && this_level === highest_level) {
        $(header).addClass('top-level-header').after(return_to_top);
      }
      if (this_level === level) // same level as before; same indenting
        html += "<li><a href='#" + header.id + "'>" + header.innerHTML + "</a>";
      else if (this_level <= level){ // higher level than before; end parent ol
        for(i = this_level; i < level; i++) {
          html += "</li></"+settings.listType+">"
        }
        html += "<li><a href='#" + header.id + "'>" + header.innerHTML + "</a>";
      }
      else if (this_level > level) { // lower level than before; expand the previous to contain a ol
        for(i = this_level; i > level; i--) {
          html += "<"+settings.listType+"><li>"
        }
        html += "<a href='#" + header.id + "'>" + header.innerHTML + "</a>";
      }
      level = this_level; // update for the next one
    });
    html += "</"+settings.listType+">";
    if (!settings.noBackToTopLinks) {
      $(document).on('click', '.back-to-top', function() {
        $(window).scrollTop(0);
        window.location.hash = '';
      });
    }

    render[settings.showEffect]();
  };
})(jQuery);


/* Safelink*/
.button1{display: inline-block;padding: 6px 20px;margin: 15px 0 10px 0;border: 1px solid #ddd;font-size: 13px;color: #414141;border-radius: 30px;cursor: pointer;transition:  all 0.3s ease}
.button1:hover{background-color: #137FAA;border-color: #137FAA;color: #fff}
.ads-top{padding: 5px 0 15px 0;text-align: center}
.ads-left,.ads-right{display: inline-block;float: left;margin: 5px 15px 0 0}
.ads-right{float: right;margin: 5px 0 0 15px}
.visit-link,#daplong{margin-right: 0;padding: 7px 30px;line-height: 25px;font-family: Lato, sans-serif;transition: all 0.3s ease-in-out}
.visit-link{padding: 7px 50px}
#HTML99,#HTML99 .widget-content{border: 0!important;margin: 0!important;padding: 0!important}
/* Responsive */
@media screen and (max-width: 768px){.ads-left,.ads-right{display: block;float: none;margin: 5px 0 0;text-align: center}}

tablebox {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}
tablebox caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}
tablebox tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}
tablebox th,
tablebox td {
  padding: .625em;
  text-align: center;
}
tablebox th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}
@media screen and (max-width: 600px) {
  tablebox {
    border: 0;
  }
  tablebox caption {
    font-size: 1.3em;
  }  
  tablebox thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }  
  tablebox tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }  
  tablebox td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }  
  tablebox td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }  
  tablebox td:last-child {
    border-bottom: 0;
  }
}
