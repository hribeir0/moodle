YUI.add("moodle-gradereport_grader-gradereporttable",function(c,i){var m,n,d,l,C=".avg .header",g="#user-grades .avg .cell",s="td.grade",o=".gradeparent table",r=".gradeparent",p="#user-grades .heading .cell",a="#user-grades tr.heading",u="#studentheader",h="#user-grades .user.cell",v={OVERRIDDEN:"overridden",TOOLTIPACTIVE:"tooltipactive"};function e(){e.superclass.constructor.apply(this,arguments)}function t(){}c.extend(e,c.Base,{_eventHandles:[],graderTable:null,initializer:function(){this.graderRegion=c.one(r),this.graderTable=c.one(o),this.setupFloatingHeaders()},getGradeUserName:function(e){e=e.ancestor("tr").one("th.user .username");return e?e.get("text"):""},getGradeItemName:function(e){e=c.one("th.item[data-itemid='"+e.getData("itemid")+"']");return e?e.get("text"):""},getGradeFeedback:function(e){return e.getData("feedback")}}),c.namespace("M.gradereport_grader").ReportTable=e,c.namespace("M.gradereport_grader").init=function(e){return new c.M.gradereport_grader.ReportTable(e)},m="height",n="width",d="offsetWidth",l="offsetHeight",v.FLOATING="floating",t.ATTRS={},t.prototype={pageHeaderHeight:0,container:null,headerCell:null,headerRow:null,firstUserCell:null,firstNonUserCell:null,firstNonUserCellLeft:0,firstNonUserCellWidth:0,tableFooterRow:null,footerRow:null,gradeItemHeadingContainer:null,userColumnHeader:null,userColumn:null,firstUserCellBottom:0,firstUserCellLeft:0,firstUserCellWidth:0,dockWidth:0,lastUserCellTop:0,floatingHeaderRow:null,_eventHandles:[],lastBodyMargin:0,setupFloatingHeaders:function(){return this.firstUserCell=c.one(h),this.container=c.one(r),this.firstNonUserCell=c.one(s),this.firstUserCell?M.cfg.behatsiterunning?void 0:(this._setupFloatingUserColumn(),this._setupFloatingUserHeader(),this._setupFloatingAssignmentHeaders(),this._setupFloatingAssignmentFooter(),this.floatingHeaderRow={},this._setupFloatingLeftHeaders(".controls .controls"),this._setupFloatingLeftHeaders(".range .range"),this._setupFloatingLeftHeaders(C),this._setupFloatingAssignmentFooterTitle(),this._calculateCellPositions(),this._handleScrollEvent(),this._setupEventHandlers(),c.Global.on("moodle-gradereport_grader:resized",this._handleResizeEvent,this),this):this},_calculateCellPositions:function(){var e,t;this.headerRowTop=this.headerRow.getY(),this.tableFooterRow&&(this.footerRowPosition=this.tableFooterRow.getY()),this.dockWidth=0,(e=c.one(".has_dock #dock"))&&(this.dockWidth=e.get(d)),e=c.all(h),this.firstUserCellLeft=this.firstUserCell.getX(),this.firstUserCellWidth=this.firstUserCell.get(d),this.firstNonUserCellLeft=this.firstNonUserCell.getX(),this.firstNonUserCellWidth=this.firstNonUserCell.get(d),1<e.size()?(t=e.item(1),this.firstUserCellBottom=t.getY()+parseInt(t.getComputedStyle(m),10),this.lastUserCellTop=e.item(e.size()-2).getY()):(t=e.item(0),this.lastUserCellTop=t.getY(),this.tableFooterRow?this.firstUserCellBottom=this.footerRowPosition+parseInt(this.tableFooterRow.getComputedStyle(m),10):this.firstUserCellBottom=t.getY()+t.get("offsetHeight")),e=c.one("header"),this.pageHeaderHeight=0,e&&("fixed"===e.getComputedStyle("position")?this.pageHeaderHeight=e.get(l):(t=c.one(".navbar"))&&"fixed"===t.getComputedStyle("position")&&(this.pageHeaderHeight=t.get(l)))},_getRelativeXY:function(e){return this._getRelativeXYFromXY(e.getX(),e.getY())},_getRelativeXYFromXY:function(e,t){var i=this.container.getXY();return[e-i[0],t-i[1]]},_getRelativeXFromX:function(e){return this._getRelativeXYFromXY(e,0)[0]},_getRelativeYFromY:function(e){return this._getRelativeXYFromXY(0,e)[1]},_getScrollBarHeight:function(){return!(c.UA.ie&&10<=c.UA.ie)&&c.config.doc.body.scrollWidth>c.config.doc.body.clientWidth?c.DOM.getScrollbarWidth():0},_setupEventHandlers:function(){this._eventHandles.push(c.one(c.config.win).on("scroll",this._handleScrollEvent,this),c.one(c.config.win).on("resize",this._handleResizeEvent,this),c.one(c.config.win).on("orientationchange",this._handleResizeEvent,this),c.Global.on("dock:shown",this._handleResizeEvent,this),c.Global.on("dock:hidden",this._handleResizeEvent,this))},_setupFloatingUserColumn:function(){var e=c.all(h),s=c.Node.create('<div aria-hidden="true" role="presentation" class="floater sideonly"></div>'),t=this._getRelativeXY(this.firstUserCell);e.each(function(e){var t,i=e.getComputedStyle(m);0!==c.UA.ie&&(i=e.get("offsetHeight")-(parseInt(e.getComputedStyle("marginTop"),10)+parseInt(e.getComputedStyle("marginBottom"),10))-(parseInt(e.getComputedStyle("paddingTop"),10)+parseInt(e.getComputedStyle("paddingBottom"),10))-(parseInt(e.getComputedStyle("borderTopWidth"),10)+parseInt(e.getComputedStyle("borderBottomWidth"),10))),(t=c.Node.create("<div></div>")).set("innerHTML",e.get("innerHTML")).setAttribute("class",e.getAttribute("class")).setAttribute("data-uid",e.ancestor("tr").getData("uid")).setStyles({height:i,width:e.getComputedStyle(n)}),s.appendChild(t)},this),s.setStyles({left:t[0]+"px",position:"absolute",top:t[1]+"px"}),this.graderRegion.append(s),this.userColumn=s},_setupFloatingUserHeader:function(){this.headerRow=c.one(a),this.headerCell=c.one(u);var e=c.Node.create('<div aria-hidden="true" role="presentation" class="floater sideonly heading"></div>'),t=c.Node.create("<div></div>"),i=this._getRelativeXY(this.headerCell)[0],s=this._getRelativeXY(this.headerRow),o=s[0];t.set("innerHTML",this.headerCell.getHTML()).setAttribute("class",this.headerCell.getAttribute("class")).setStyles({width:this.firstUserCell.getComputedStyle(n),left:i-o+"px"}),e.setStyles({left:s[0]+"px",position:"absolute",top:s[1]+"px"}),e.append(t),this.graderRegion.append(e),this.userColumnHeader=e},_setupFloatingAssignmentHeaders:function(){var e,s,t,o,r,a;this.headerRow=c.one("#user-grades tr.heading"),e=c.all("#user-grades tr.heading .cell"),s=c.Node.create('<div aria-hidden="true" role="presentation" class="floater heading"></div>'),t=this._getRelativeXY(this.headerRow),a=t[r=o=0],e.each(function(e){var t=this._getRelativeXY(e)[0],i=c.Node.create("<div></div>");i.append(e.getHTML()
).setAttribute("class",e.getAttribute("class")).setData("itemid",e.getData("itemid")).setStyles({height:e.getComputedStyle(m),left:t-a+"px",position:"absolute",width:e.getComputedStyle(n)}),o+=parseInt(e.get(d),10),r=e.get(l),s.appendChild(i)},this),s.setStyles({height:r+"px",left:t[0]+"px",position:"absolute",top:t[1]+"px",width:o+"px"}),this.userColumnHeader.insert(s,"before"),this.gradeItemHeadingContainer=s},_setupFloatingAssignmentFooter:function(){var e,s,o,t,r,a;this.tableFooterRow=c.one("#user-grades .avg"),this.tableFooterRow&&(e=this.tableFooterRow.all(".cell"),s=c.Node.create('<div aria-hidden="true" role="presentation" class="floater avg"></div>'),o=0,t=this._getRelativeXY(this.tableFooterRow),r=t[0],a=0,e.each(function(e){var t=c.Node.create("<div></div>"),i=this._getRelativeXY(e)[0];t.set("innerHTML",e.getHTML()).setAttribute("class",e.getAttribute("class")).setStyles({height:e.getComputedStyle(m),left:i-r+"px",position:"absolute",width:e.getComputedStyle(n)}),s.append(t),a=e.get(l),o+=parseInt(e.get(d),10)},this),s.setStyles({position:"absolute",left:t[0]+"px",bottom:"1px",height:a+"px",width:o+"px"}),this.graderRegion.append(s),this.footerRow=s)},_setupFloatingAssignmentFooterTitle:function(){var e=this.floatingHeaderRow[C];e&&e.setStyles({bottom:"1px"})},_setupFloatingLeftHeaders:function(e){var t,i,s,o,r,a=c.one(e);a&&(t=c.Node.create('<div aria-hidden="true" role="presentation" class="floater sideonly"></div>'),i=c.Node.create("<div></div>"),s=this._getRelativeXY(a),o=this.firstUserCell.getComputedStyle(n),r=a.get(l),i.set("innerHTML",a.getHTML()).setAttribute("class",a.getAttribute("class")).setStyles({width:o}),t.setStyles({position:"absolute",top:s[1]+"px",left:s[0]+"px",height:r+"px"}).addClass(a.get("parentNode").get("className")),t.append(i),this.graderRegion.append(t),this.floatingHeaderRow[e]=t)},_handleScrollEvent:function(){var e={},h={},g={},t={},i=0,s=0,o=0,p=!1,r=!1,u=!1,f=!1,a={},l={},n=!1,d=0,d=window.right_to_left()?parseInt(c.one(c.config.doc.body).getComputedStyle("marginRight"),10):parseInt(c.one(c.config.doc.body).getComputedStyle("marginLeft"),10);d!=this.lastBodyMargin&&this._calculateCellPositions(),e.left=this._getRelativeXFromX(this.headerRow.getX()),i=c.config.win.pageYOffset+this.pageHeaderHeight>this.headerRowTop?(p=!0,c.config.win.pageYOffset+this.pageHeaderHeight<this.lastUserCellTop?this._getRelativeYFromY(c.config.win.pageYOffset+this.pageHeaderHeight):this._getRelativeYFromY(this.lastUserCellTop)):(p=!1,this._getRelativeYFromY(this.headerRowTop)),e.top=i+"px",h.top=i+"px",f=window.right_to_left()?(o=(s=c.config.win.innerWidth+c.config.win.pageXOffset-this.dockWidth)-this.firstUserCellWidth-d,r=s<this.firstUserCellLeft+this.firstUserCellWidth+d,s-this.firstNonUserCellWidth<this.firstNonUserCellLeft+this.firstUserCellWidth):(r=(s=(o=c.config.win.pageXOffset+d)+this.dockWidth+d)>this.firstUserCellLeft+d,s>this.firstNonUserCellLeft-this.firstUserCellWidth),i=r?this._getRelativeXFromX(o):this._getRelativeXFromX(this.firstUserCellLeft),g.left=i+"px",h.left=i+"px",c.Object.each(this.floatingHeaderRow,function(e,t){a[t]={left:g.left}},this),this.footerRow&&(t.left=this._getRelativeXFromX(this.headerRow.getX()),d=c.config.win.innerHeight,s=c.config.win.pageYOffset,o=d-this._getScrollBarHeight()+s,i=parseInt(this.footerRow.getComputedStyle(m),10)+this.footerRowPosition,l=a[C],n=this.floatingHeaderRow[C],u=o<i&&o>this.firstUserCellBottom?(t.bottom=Math.ceil(i-o)+"px",!0):!(t.bottom="1px"),l&&(l.bottom=t.bottom,l.top=null),a[C]=l),this.gradeItemHeadingContainer&&(this.gradeItemHeadingContainer.setStyles(e),p?this.gradeItemHeadingContainer.addClass(v.FLOATING):this.gradeItemHeadingContainer.removeClass(v.FLOATING)),this.userColumnHeader&&(this.userColumnHeader.setStyles(h),r?this.userColumnHeader.addClass(v.FLOATING):this.userColumnHeader.removeClass(v.FLOATING)),this.userColumn&&(this.userColumn.setStyles(g),r?this.userColumn.addClass(v.FLOATING):this.userColumn.removeClass(v.FLOATING)),this.footerRow&&(this.footerRow.setStyles(t),u?this.footerRow.addClass(v.FLOATING):this.footerRow.removeClass(v.FLOATING)),c.Object.each(a,function(e,t){this.floatingHeaderRow[t]&&this.floatingHeaderRow[t].setStyles(e)},this),c.Object.each(this.floatingHeaderRow,function(e,t){this.floatingHeaderRow[t]&&(f?this.floatingHeaderRow[t].addClass(v.FLOATING):this.floatingHeaderRow[t].removeClass(v.FLOATING))},this),n&&(f?n.addClass(v.FLOATING):n.removeClass(v.FLOATING))},_handleResizeEvent:function(){var s,o,i,e,r,a,l;this._calculateCellPositions(),this._handleScrollEvent(),s=this.firstUserCell.getComputedStyle(n),o=c.all(h),this.userColumnHeader.one(".cell").setStyle("width",s),this.userColumn.all(".cell").each(function(e,t){var i=o.item(t).getComputedStyle(m);0!==c.UA.ie&&(i=((t=o.item(t)).getDOMNode?t.getDOMNode().getBoundingClientRect().height:t.get("offsetHeight"))-(parseInt(t.getComputedStyle("marginTop"),10)+parseInt(t.getComputedStyle("marginBottom"),10))-(parseInt(t.getComputedStyle("paddingTop"),10)+parseInt(t.getComputedStyle("paddingBottom"),10))-(parseInt(t.getComputedStyle("borderTopWidth"),10)+parseInt(t.getComputedStyle("borderBottomWidth"),10))),e.setStyles({width:s,height:i})},this),i=this.gradeItemHeadingContainer.all(".cell"),e=c.all(p),r=this.headerRow.getX(),a=0,e.each(function(e,t){t=i.item(t);a+=e.get(d),e={width:e.getComputedStyle(n),left:e.getX()-r+"px"},t.setStyles(e)}),this.footerRow&&0!==(l=this.footerRow.all(".cell")).size()&&c.all(g).each(function(e,t){t=l.item(t),e={width:e.getComputedStyle(n),left:e.getX()-r+"px"};t.setStyles(e)}),c.Object.each(this.floatingHeaderRow,function(e){e.one("div").setStyle("width",s)},this),this.gradeItemHeadingContainer.setStyle("width",a)}},c.Base.mix(c.M.gradereport_grader.ReportTable,[t])},"@VERSION@",{requires:["base","node","event","handlebars","overlay","event-hover"]});