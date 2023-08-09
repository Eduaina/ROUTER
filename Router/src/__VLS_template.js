import { RouterLink } from 'vue-router';
import { __VLS_publicComponent, __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './App.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'navbar'?: boolean; } &
{ 'img'?: boolean; } &
{ 'nav'?: boolean; } &
{ 'router-link-exact-active'?: boolean; } &
{ 'img'?: boolean; } &
{ 'wrapper'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'RouterLink', typeof __VLS_localComponents, "RouterLink", "RouterLink", "RouterLink"> &
__VLS_WithComponent<'RouterView', typeof __VLS_localComponents, "RouterView", "RouterView", "RouterView">;
({} as __VLS_IntrinsicElements).nav; ({} as __VLS_IntrinsicElements).nav;
({} as __VLS_IntrinsicElements).img; ({} as __VLS_IntrinsicElements).img;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
__VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.RouterLink;
// @ts-ignore
[RouterLink, RouterLink, RouterLink, RouterLink,];
__VLS_components.RouterView; __VLS_components.RouterView;
// @ts-ignore
[RouterView, RouterView,];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["nav"];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
({} as __VLS_IntrinsicElements).nav;
({} as __VLS_IntrinsicElements).nav;
const __VLS_2 = __VLS_1({ ...{}, class: ("navbar"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
const __VLS_4 = ({} as __VLS_IntrinsicElements)["img"];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, {});
({} as __VLS_IntrinsicElements).img;
({} as __VLS_IntrinsicElements).img;
const __VLS_6 = __VLS_5({ ...{}, src: ("Router/1602.m10.i304.n038.S.c12.285637448 Cinema vector vintage labels, emblems, badges set.jpg"), class: ("img"), width: ("125"), height: ("125"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
}
{
const __VLS_8 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_10 = __VLS_9({ ...{}, class: ("nav"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
let __VLS_12!: 'RouterLink' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.RouterLink : (typeof __VLS_resolvedLocalAndGlobalComponents)['RouterLink'];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{}, to: ("/"), }));
({} as { RouterLink: typeof __VLS_12; }).RouterLink;
({} as { RouterLink: typeof __VLS_12; }).RouterLink;
const __VLS_14 = __VLS_13({ ...{}, to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
}
{
let __VLS_16!: 'RouterLink' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.RouterLink : (typeof __VLS_resolvedLocalAndGlobalComponents)['RouterLink'];
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{}, to: ("/MovieDetail"), }));
({} as { RouterLink: typeof __VLS_16; }).RouterLink;
({} as { RouterLink: typeof __VLS_16; }).RouterLink;
const __VLS_18 = __VLS_17({ ...{}, to: ("/MovieDetail"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
}
}
}
{
let __VLS_20!: 'RouterView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.RouterView : (typeof __VLS_resolvedLocalAndGlobalComponents)['RouterView'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
({} as { RouterView: typeof __VLS_20; }).RouterView;
({} as { RouterView: typeof __VLS_20; }).RouterView;
const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["navbar"];
__VLS_styleScopedClasses["img"];
__VLS_styleScopedClasses["nav"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
