(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"5UAH":function(n,e,t){"use strict";t.r(e);var r=t("ofXK"),c=t("tk/3"),o=t("PCNd"),a=t("JIr8"),s=t("lJxs"),i=t("jn67"),u=t("fXoL"),m=t("vHPH");function b(n,e){if(1&n&&(u.Vb(0,"div",1),u.Vb(1,"div",2),u.Qb(2,"img",3),u.Qb(3,"p",4),u.Vb(4,"a",5),u.Gc(5,"Learn More"),u.Tb(),u.Tb(),u.Tb()),2&n){const n=u.hc();u.Ab(2),u.mc("src",n.announcement.imageUrl,u.xc),u.Ab(1),u.mc("innerHTML",n.announcement.message,u.wc),u.Ab(1),u.mc("href",n.announcement.linkUrl,u.xc)}}const l=i.a+"announcements.json";let f=(()=>{class n{constructor(n,e){this.http=n,this.logger=e}ngOnInit(){this.http.get(l).pipe(Object(a.a)(n=>(this.logger.error(new Error(`${l} request failed: ${n.message}`)),[])),Object(s.a)(n=>this.findCurrentAnnouncement(n)),Object(a.a)(n=>(this.logger.error(new Error(`${l} contains invalid data: ${n.message}`)),[]))).subscribe(n=>this.announcement=n)}findCurrentAnnouncement(n){return n.filter(n=>new Date(n.startDate).valueOf()<Date.now()).filter(n=>new Date(n.endDate).valueOf()>Date.now())[0]}}return n.\u0275fac=function(e){return new(e||n)(u.Pb(c.a),u.Pb(m.a))},n.\u0275cmp=u.Jb({type:n,selectors:[["aio-announcement-bar"]],decls:1,vars:1,consts:[["class","homepage-container",4,"ngIf"],[1,"homepage-container"],[1,"announcement-bar"],["alt","",3,"src"],[3,"innerHTML"],[1,"button",3,"href"]],template:function(n,e){1&n&&u.Ec(0,b,6,3,"div",0),2&n&&u.mc("ngIf",e.announcement)},directives:[r.k],encapsulation:2}),n})();t.d(e,"AnnouncementBarModule",(function(){return p}));let p=(()=>{class n{constructor(){this.customElementComponent=f}}return n.\u0275mod=u.Nb({type:n}),n.\u0275inj=u.Mb({factory:function(e){return new(e||n)},imports:[[r.c,o.a,c.b]]}),n})()}}]);
//# sourceMappingURL=announcement-bar-announcement-bar-module-es2015.42ff0b6e5aa6620c6acf.js.map