!function(){"use strict";var e={};(function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var t=window.wc.tracks;productScreen&&"list"===productScreen.name&&(()=>{const e=document.querySelectorAll(".row-actions span"),o=document.querySelector("#bulk-action-selector-top"),c=document.querySelector("#doaction"),n=document.querySelector("#bulk-edit .cancel"),r=document.querySelector("#bulk_edit"),l=document.querySelectorAll("#the-list .featured a"),d=document.querySelector("#post-query-submit"),i=document.querySelector("#product_cat"),u=document.querySelector("#dropdown_product_type"),a=document.querySelector("#search-submit"),s=document.querySelector("#post-search-input"),_=document.querySelectorAll(".wp-list-table.posts thead .sortable a, .wp-list-table.posts thead .sorted a"),v=document.querySelector('[name="stock_status"]'),m=e=>{const t=document.querySelector(e);return!!t&&""!==t.value&&"-1"!==t.value};null==d||d.addEventListener("click",(function(){(0,t.recordEvent)("products_list_filter_click",{search_string_length:null==s?void 0:s.value.length,filter_category:""!==i.value,filter_product_type:u.value,filter_stock_status:v.value})})),null==c||c.addEventListener("click",(function(){const e=document.querySelectorAll('[name="post[]"]:checked').length;(0,t.recordEvent)("products_list_bulk_actions_click",{selected_action:o.value,product_number:e})})),null==r||r.addEventListener("click",(function(){var e,o;(0,t.recordEvent)("products_list_bulk_edit_update",{product_number:null===(e=document.querySelector("#bulk-titles"))||void 0===e?void 0:e.children.length,product_categories:(null===(o=document.querySelectorAll('[name="tax_input[product_cat][]"]:checked'))||void 0===o?void 0:o.length)>0,comments:m('[name="comment_status"]'),status:m('[name="_status"]'),product_tags:m('[name="tax_input[product_tag]"]'),price:m('[name="change_regular_price"]'),sale:m('[name="change_sale_price"]'),tax_status:m('[name="_tax_status"]'),tax_class:m('[name="_tax_class"]'),weight:m('[name="change_weight"]'),dimensions:m('[name="change_dimensions"]'),shipping_class:m('[name="_shipping_class"]'),visibility:m('[name="_visibility"]'),featured:m('[name="_featured"]'),stock_status:m('[name="_stock_status"]'),manage_stock:m('[name="_manage_stock"]'),stock_quantity:m('[name="change_stock"]'),backorders:m('[name="_backorders"]'),sold_individually:m('[name="_sold_individually"]')})})),null==n||n.addEventListener("click",(function(){(0,t.recordEvent)("products_list_bulk_edit_cancel")})),e.forEach((e=>{e.addEventListener("click",(function(e){var o,c;const n=null===(o=e.target)||void 0===o||null===(c=o.parentElement)||void 0===c?void 0:c.classList[0],r={edit:"edit",inline:"quick_edit",trash:"trash",view:"preview",duplicate:"duplicate"};n&&r[n]&&(0,t.recordEvent)("products_list_product_action_click",{selected_action:r[n]})}))})),l.forEach((e=>{e.addEventListener("click",(function(e){const o=e.target.classList.contains("not-featured");(0,t.recordEvent)("products_list_featured_click",{featured:o?"yes":"no"})}))})),null==a||a.addEventListener("click",(function(){(0,t.recordEvent)("products_search",{search_string_length:s.value.length,filter_category:""!==i.value,filter_product_type:u.value,filter_stock_status:v.value})})),_.forEach((e=>{e.addEventListener("click",(function(e){const o=e.target.closest("th");if(!o)return;const c=o.classList.contains("asc");(0,t.recordEvent)("products_list_column_header_click",{field_slug:o.id,order:c?"desc":"asc"})}))}))})();var o=window.wc.customerEffortScore;function c(e,t){const o=document.querySelector(e);if(!o)return;const c=e=>{t.forEach((t=>{let{eventName:o,childQuery:c,callback:n}=t;e.type===o&&e.target.matches(c)&&n(e.target)}))};t.forEach((e=>{let{eventName:t}=e;o.addEventListener(t,c)}))}function n(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;o>6||setTimeout((()=>{document.querySelector(e)?t():n(e,t,++o)}),500)}const r=()=>{var e;return null===(e=document.querySelector("#product-type"))||void 0===e?void 0:e.value},l=()=>{var e,t,o,c,n,l,d,i,u,a,s,_;const v=document.querySelectorAll(".block-editor").length>0;let m="",p="";if(v){var y;m=null===(y=document.querySelector(".block-editor-rich-text__editable"))||void 0===y?void 0:y.value}else{p=document.querySelector('[name="tax_input[product_tag]"]').value;const e=document.querySelector("#content");e&&(g=e,"none"!==window.getComputedStyle(g).display)?m=e.value:"object"==typeof tinymce&&tinymce.get("content")&&(m=tinymce.get("content").getContent())}var g;const h=Array.from(document.querySelectorAll('input[type="checkbox"][data-product-type-option-id]')).map((e=>({id:e.getAttribute("data-product-type-option-id"),isEnabled:e.checked}))).filter((e=>e.isEnabled)).map((e=>e.id)).join(", ");return{product_id:null===(e=document.querySelector("#post_ID"))||void 0===e?void 0:e.value,product_type:r(),product_type_options:h,is_downloadable:null!==(t=document.querySelector("#_downloadable"))&&void 0!==t&&t.checked?"Yes":"No",is_virtual:null!==(o=document.querySelector("#_virtual"))&&void 0!==o&&o.checked?"Yes":"No",manage_stock:null!==(c=document.querySelector("#_manage_stock"))&&void 0!==c&&c.checked?"Yes":"No",attributes:document.querySelectorAll(".woocommerce_attribute").length,categories:document.querySelectorAll('[name="tax_input[product_cat][]"]:checked').length,cross_sells:document.querySelectorAll("#crosssell_ids option").length?"Yes":"No",description:""!==m.trim()?"Yes":"No",enable_reviews:null!==(n=document.querySelector("#comment_status"))&&void 0!==n&&n.checked?"Yes":"No",is_block_editor:v,menu_order:0!==parseInt(null!==(l=null===(d=document.querySelector("#menu_order"))||void 0===d?void 0:d.value)&&void 0!==l?l:0,10)?"Yes":"No",product_gallery:document.querySelectorAll("#product_images_container .product_images > li").length,product_image:parseInt(null===(i=document.querySelector("#_thumbnail_id"))||void 0===i?void 0:i.value,10)>0?"Yes":"No",purchase_note:null!==(u=document.querySelector("#_purchase_note"))&&void 0!==u&&u.value.length?"Yes":"No",sale_price:null!==(a=document.querySelector("#_sale_price"))&&void 0!==a&&a.value?"Yes":"No",short_description:null!==(s=document.querySelector("#excerpt"))&&void 0!==s&&s.value.length?"Yes":"No",tags:p.length>0?p.split(",").length:0,upsells:document.querySelectorAll("#upsell_ids option").length?"Yes":"No",weight:null!==(_=document.querySelector("#_weight"))&&void 0!==_&&_.value?"Yes":"No"}},d=function(){var e,t,o,c,n;let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const l=null===(e=document.querySelector(`#${r}mm`))||void 0===e?void 0:e.value,d=null===(t=document.querySelector(`#${r}jj`))||void 0===t?void 0:t.value,i=null===(o=document.querySelector(`#${r}aa`))||void 0===o?void 0:o.value,u=null===(c=document.querySelector(`#${r}hh`))||void 0===c?void 0:c.value,a=null===(n=document.querySelector(`#${r}mn`))||void 0===n?void 0:n.value;return`${l}-${d}-${i} ${u}:${a}`},i=()=>{var e,t,o,c;return{status:null===(e=document.querySelector("#post_status"))||void 0===e?void 0:e.value,visibility:null===(t=document.querySelector('input[name="visibility"]:checked'))||void 0===t?void 0:t.value,date:d()!==d("hidden_")?"yes":"no",catalog_visibility:null===(o=document.querySelector('input[name="_visibility"]:checked'))||void 0===o?void 0:o.value,featured:null===(c=document.querySelector("#_featured"))||void 0===c?void 0:c.checked}},u=(e,t)=>Object.fromEntries(Object.entries(e).map((e=>{let[o,c]=e;return[`${t}${o}`,c]}))),a=e=>{const t={};return t.product_type=r(),"inventory"===e&&(t.is_store_stock_management_enabled=null!==document.querySelector("#_manage_stock")),t},s=()=>{var e,o,r,d,s,_,v,m;c("#product_attributes",[{eventName:"click",childQuery:".add_new_attribute",callback:()=>{(0,t.recordEvent)("product_attributes_add_term",{page:"product"})}}]),(()=>{var e,o,c,r,d,a;const s=i();null===(e=document.querySelector("#post-preview"))||void 0===e||e.addEventListener("click",(()=>{(0,t.recordEvent)("product_preview_changes")})),null===(o=document.querySelector(".submitduplicate"))||void 0===o||o.addEventListener("click",(()=>{(0,t.recordEvent)("product_copy",l())})),null===(c=document.querySelector(".submitdelete"))||void 0===c||c.addEventListener("click",(()=>{(0,t.recordEvent)("product_delete",l())})),document.querySelectorAll(".edit-post-status, .edit-visibility, .edit-timestamp, .edit-catalog-visibility").forEach((e=>{e.addEventListener("click",(()=>{(0,t.recordEvent)("product_publish_widget_edit",{...i(),...l()})}))})),document.querySelectorAll(".save-post-status, .save-post-visibility, .save-timestamp, .save-post-visibility").forEach((e=>{e.addEventListener("click",(()=>{(0,t.recordEvent)("product_publish_widget_save",{...u(i(),"new_"),...u(s,"current_"),...l()})}))})),document.querySelectorAll(".handle-order-lower, .handle-order-higher").forEach((e=>{e.addEventListener("click",(e=>{const o=e.target.closest(".postbox");o&&(0,t.recordEvent)("product_widget_order_change",{widget:o.id})}))})),null===(r=document.querySelector("#show-settings-link"))||void 0===r||r.addEventListener("click",(()=>{(0,t.recordEvent)("product_screen_options_open")})),document.querySelectorAll("#adv-settings .metabox-prefs input[type=checkbox]").forEach((e=>{e.addEventListener("change",(()=>{(0,t.recordEvent)("product_screen_elements",{selected_element:e.value,checkbox:e.checked})}))})),document.querySelectorAll('input[name="screen_columns"]').forEach((e=>{e.addEventListener("change",(()=>{(0,t.recordEvent)("product_layout",{selected_layout:e.value})}))})),null===(d=document.querySelector("#editor-expand-toggle"))||void 0===d||d.addEventListener("change",(e=>{(0,t.recordEvent)("product_additional_settings",{checkbox:e.target.checked})})),null===(a=document.querySelector("#woocommerce-product-updated-message-view-product__link"))||void 0===a||a.addEventListener("click",(()=>{(0,t.recordEvent)("product_view_product_click",l())}));const _=".notice-success.is-dismissible > button";n(_,(()=>{var e;null===(e=document.querySelector(_))||void 0===e||e.addEventListener("click",(()=>{(0,t.recordEvent)("product_view_product_dismiss",l())}))}))})(),(()=>{var e,o;function c(){var e;(0,t.recordEvent)("product_tags_delete",{page:"product",tag_list_size:(null===(e=document.querySelector(".tagchecklist"))||void 0===e?void 0:e.children.length)||0})}function r(){document.querySelectorAll("#product_tag .ntdelbutton").forEach((e=>{e.removeEventListener("click",c),e.addEventListener("click",c)}))}function l(e){var o,c;(0,t.recordEvent)("product_tags_add",{page:"product",tag_string_length:null===(o=e.target.textContent)||void 0===o?void 0:o.length,tag_list_size:(null===(c=document.querySelector(".tagchecklist"))||void 0===c?void 0:c.children.length)||0,most_used:!0}),r()}function d(){document.querySelectorAll("#tagcloud-product_tag .tag-cloud-link").forEach((e=>{e.removeEventListener("click",l),e.addEventListener("click",l)}))}n("#product_tag .tagchecklist",r),null===(e=document.querySelector(".tagadd"))||void 0===e||e.addEventListener("click",(()=>{const e=document.querySelector("#new-tag-product_tag");var o;e&&e.value&&e.value.length>0&&((0,t.recordEvent)("product_tags_add",{page:"product",tag_string_length:e.value.length,tag_list_size:((null===(o=document.querySelector(".tagchecklist"))||void 0===o?void 0:o.children.length)||0)+1,most_used:!1}),setTimeout((()=>{r()}),500))})),null===(o=document.querySelector(".tagcloud-link"))||void 0===o||o.addEventListener("click",(()=>{n("#tagcloud-product_tag",d)}))})(),null===(v=document.querySelector("#product_attributes .add_custom_attribute"))||void 0===v||v.addEventListener("click",(()=>{(0,t.recordEvent)("product_attributes_buttons",{action:"add_new"})})),null===(m=window)||void 0===m||m.jQuery("select.wc-attribute-search").on("select2:select",(function(){(0,t.recordEvent)("product_attributes_buttons",{action:"add_existing"})})),c("#product_attributes",[{eventName:"click",childQuery:".woocommerce_attribute_visible_on_product_page",callback:e=>{const o=e.getAttribute("name"),c=document.querySelector(`[name="${o}"]`);(0,t.recordEvent)("product_attributes_buttons",{action:"visible_on_product_page",checked:null==c?void 0:c.checked})}},{eventName:"click",childQuery:".woocommerce_attribute_used_for_variations",callback:e=>{const o=e.getAttribute("name"),c=document.querySelector(`[name="${o}"]`);(0,t.recordEvent)("product_attributes_buttons",{action:"used_for_variations",checked:null==c?void 0:c.checked})}}]),null===(_=document.querySelector(".save_attributes"))||void 0===_||_.addEventListener("click",(e=>{if(e.target instanceof Element&&e.target.classList.contains("disabled"))return;const o=document.querySelectorAll(".woocommerce_attribute:not(.taxonomy)").length,c=document.querySelectorAll(".woocommerce_attribute.taxonomy").length;var n;(0,t.recordEvent)("product_attributes_save",{page:"product",total_attributes_count:c+o,local_attributes_count:o,global_attributes_count:c,visible_on_product_page_count:document.querySelectorAll('input[name^="attribute_visibility"]:checked').length,used_for_variations_count:"variable"===(null===(n=document.querySelector("#product-type"))||void 0===n?void 0:n.value)?document.querySelectorAll('input[name^="attribute_variation"]:checked').length:0})})),null===(e=document.querySelector("#variable_product_options_inner .variations-add-attributes-link"))||void 0===e||e.addEventListener("click",(()=>{(0,t.recordEvent)("product_variations_empty_state",{action:"add_attribute_link"})})),null===(o=document.querySelector("#variable_product_options_inner .variations-learn-more-link"))||void 0===o||o.addEventListener("click",(()=>{(0,t.recordEvent)("product_variations_empty_state",{action:"learn_more_link"})})),c("#variable_product_options",[{eventName:"click",childQuery:".add_variation_manually",callback:()=>{(0,t.recordEvent)("product_variations_buttons",{action:"add_variation_manually"})}},{eventName:"change",childQuery:"#field_to_edit",callback:()=>{var e;const o=document.querySelector("#field_to_edit"),c=o.selectedIndex;(0,t.recordEvent)("product_variations_buttons",{action:"bulk_actions",selected:null===(e=o.options[c])||void 0===e?void 0:e.value})}}]),document.querySelectorAll(".product_data_tabs > li").forEach((e=>{var o;const c=(e=>{const t="_options",o=Array.from(e.classList).filter((e=>e.endsWith(t)));return o.length>0?o[0].slice(0,-t.length):""})(e);null===(o=e.querySelector("a"))||void 0===o||o.addEventListener("click",(()=>{(0,t.recordEvent)("product_tab_click",{product_tab:c,...a(c)})}))})),null===(r=document.querySelector("#_manage_stock"))||void 0===r||r.addEventListener("click",(e=>{var o;(0,t.recordEvent)("product_manage_stock_click",{is_enabled:null===(o=e.target)||void 0===o?void 0:o.checked})})),null===(d=document.querySelector("#_manage_stock_disabled > a"))||void 0===d||d.addEventListener("click",(()=>{(0,t.recordEvent)("product_manage_stock_disabled_store_settings_link_click")})),null===(s=document.querySelector("#inventory_product_data .notice a"))||void 0===s||s.addEventListener("click",(()=>{(0,t.recordEvent)("product_inventory_variations_notice_learn_more_click")}))};function _(e){let t=!1,c=!1;const n=document.querySelector("#submitpost a.submitdelete");n&&n.addEventListener("click",(function(){c=!0})),window.addEventListener("beforeunload",(function(){if(function(){const e=['#submitpost [type="submit"]',"#submitpost #post-preview"];let t=!1;for(const o of e)document.querySelectorAll(o).forEach((e=>{e.classList.contains("disabled")&&(t=!0)}));return t}()||c)return t=!1,void(c=!1);const e=window.tinymce&&window.tinymce.get("content");window.wp.autosave?t=window.wp.autosave.server.postChanged():e&&(t=!e.isHidden()&&e.isDirty())})),(0,o.addCustomerEffortScoreExitPageListener)(e,(()=>t))}productScreen&&"edit"===productScreen.name&&((0,t.recordEvent)("product_edit_view"),s(),_("product_edit_view")),productScreen&&"new"===productScreen.name&&((0,t.recordEvent)("product_add_view"),s(),_("product_add_view")),(window.wc=window.wc||{}).productTracking=e}();