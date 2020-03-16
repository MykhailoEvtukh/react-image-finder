(this["webpackJsonpreact-image-finder"]=this["webpackJsonpreact-image-finder"]||[]).push([[0],{10:function(e,a,t){e.exports={Overlay:"Modal_Overlay__1ILFd",Modal:"Modal_Modal__1ZwA-"}},23:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__3UN4Z"}},24:function(e,a,t){e.exports={Button:"Button_Button__3bysY"}},26:function(e,a,t){e.exports={loader:"Loader_loader__3SYzG"}},27:function(e,a,t){e.exports=t(70)},3:function(e,a,t){e.exports={Searchbar:"SearchBar_Searchbar__136KL",SearchForm:"SearchBar_SearchForm__30lnH",SearchFormButton:"SearchBar_SearchFormButton__2OgZJ",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__3izR-",SearchFormInput:"SearchBar_SearchFormInput__32Gdk"}},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),c=t.n(o),l=t(11),i=t(4),s=t(5),u=t(7),m=t(6),h=t(8),d=t(22),g=t.n(d),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mountain",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return g.a.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&page=".concat(a,"&key=14164139-8943874eaa49b60ce964146b7&q=").concat(e))},f=t(3),b=t.n(f),y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={query:""},t.handleChange=function(e){t.setState({query:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var a=t.state.query;t.props.onSearch(a),t.setState({query:""})},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("header",{className:b.a.Searchbar},r.a.createElement("form",{onSubmit:this.handleSubmit,className:b.a.SearchForm},r.a.createElement("button",{type:"submit",className:b.a.SearchFormButton},r.a.createElement("span",{className:b.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",placeholder:"Search images and photos",value:e,onChange:this.handleChange})))}}]),a}(n.Component),S=t(9),_=t.n(S),v=function(e){var a=e.dataObj,t=e.onOpenModal;return r.a.createElement("li",{className:_.a.ImageGalleryItem,onClick:function(){return t(a.webformatURL)}},r.a.createElement("img",{src:a.webformatURL,alt:"",className:_.a.ImageGalleryItemImage}))},I=t(23),E=t.n(I),O=function(e){var a=e.items,t=e.onOpenModal;return r.a.createElement("ul",{className:E.a.ImageGallery},a.map((function(e){return r.a.createElement(v,{onOpenModal:t,key:e.id,dataObj:e})})))},M=t(24),N=t.n(M),B=function(e){var a=e.onChangePage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:a,type:"button",className:N.a.Button},"Load more"))},w=t(25),k=t.n(w),F=t(26),L=t.n(F),j=function(){return r.a.createElement("div",{className:L.a.loader},r.a.createElement(k.a,{type:"Bars",color:"#383838",height:100,width:100}))},G=t(10),C=t.n(G),q=function(e){var a=e.bigUrl,t=e.closeModal;return r.a.createElement("div",{className:C.a.Overlay,onClick:t},r.a.createElement("div",{className:C.a.Modal},r.a.createElement("img",{src:a,alt:""})))},x=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={articles:[],isLoading:!1,pageNumber:1,query:"",isModalOpen:!1,bigUrl:""},t.getArticles=function(e,a){t.setState({isLoading:!0}),p(e,a).then((function(e){return t.setState((function(a){return{articles:[].concat(Object(l.a)(a.articles),Object(l.a)(e.data.hits))}}))})).catch((function(e){return console.warn(e)})).finally((function(){return setTimeout((function(){t.setState({isLoading:!1})}),500)}))},t.changePage=function(){t.state.articles.length>0&&t.setState((function(e){return{pageNumber:e.pageNumber+1}}))},t.onSearch=function(e){t.setState({query:e,articles:[],pageNumber:1})},t.openModal=function(e){t.setState({isModalOpen:!0,bigUrl:e}),window.addEventListener("keydown",t.closeModal)},t.closeModal=function(e){e.target!==e.currentTarget&&27!==e.keyCode||t.setState({isModalOpen:!1}),window.removeEventListener("keydown",t.closeModal)},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.state,a=e.query,t=e.pageNumber;this.getArticles(a,t)}},{key:"componentDidUpdate",value:function(e,a){var t=this.state,n=t.pageNumber,r=t.query,o=t.articles;a.pageNumber===n&&a.query===r||this.getArticles(r,n),a.articles!==o&&o.length>8&&setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),1e3)}},{key:"render",value:function(){var e=this.state,a=e.articles,t=e.isLoading,n=e.isModalOpen,o=e.bigUrl;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{onSearch:this.onSearch}),r.a.createElement(O,{items:a,onOpenModal:this.openModal}),t&&r.a.createElement(j,null),r.a.createElement(B,{onChangePage:this.changePage}),n&&r.a.createElement(q,{bigUrl:o,closeModal:this.closeModal}))}}]),a}(n.Component);c.a.render(r.a.createElement(x,null),document.getElementById("root"))},9:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__11Qoc",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__9ZBk3"}}},[[27,1,2]]]);
//# sourceMappingURL=main.52674fe1.chunk.js.map