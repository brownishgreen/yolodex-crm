const __VLS_props = defineProps();
const __VLS_emit = defineEmits();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['contact-detail__button']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__button']} */ ;
// CSS variable injection 
// CSS variable injection end 
if (__VLS_ctx.contact) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "contact-detail" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "contact-detail__info" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "contact-detail__info-item" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "contact-detail__button-group" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.contact))
                    return;
                __VLS_ctx.$emit('edit', __VLS_ctx.contact);
            } },
        ...{ class: "contact-detail__button" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.contact))
                    return;
                __VLS_ctx.$emit('delete', __VLS_ctx.contact);
            } },
        ...{ class: "contact-detail__button" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (__VLS_ctx.contact.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "contact-detail__info-item-label" },
    });
    (__VLS_ctx.contact.email);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "contact-detail__info-item-label" },
    });
    (__VLS_ctx.contact.phone);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "contact-detail__info-item-label" },
    });
    (__VLS_ctx.contact.status);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "contact-detail__info-item-label" },
    });
    (__VLS_ctx.contact.company);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "contact-detail__info-item-label" },
    });
    (__VLS_ctx.contact.jobTitle);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "contact-detail__info-item-label" },
    });
    (__VLS_ctx.contact.notes);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "contact-detail__info-item-label" },
    });
    (__VLS_ctx.contact.updatedAt.toLocaleDateString());
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "contact-detail__info-item-label" },
    });
    (__VLS_ctx.contact.createdAt.toLocaleDateString());
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "contact-detail__interactions" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: "timeline" },
    });
    for (const [i] of __VLS_getVForSourceType((__VLS_ctx.contact.interactions))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: (i.date.getTime()),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
            ...{ class: "timeline-dot" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "timeline-content" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "timeline-date" },
        });
        (i.date.toLocaleDateString());
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "timeline-type" },
        });
        (i.type);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "timeline-note" },
        });
        (i.note);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "interaction-add-btn-container" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.contact))
                    return;
                __VLS_ctx.$emit('open-add-interaction', __VLS_ctx.contact.id);
            } },
        ...{ class: "interaction-add-btn" },
    });
    const __VLS_0 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        icon: "fa-solid fa-plus",
        ...{ class: "interaction-add-btn-icon" },
    }));
    const __VLS_2 = __VLS_1({
        icon: "fa-solid fa-plus",
        ...{ class: "interaction-add-btn-icon" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
/** @type {__VLS_StyleScopedClasses['contact-detail']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__info']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__info-item']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__button-group']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__button']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__button']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__info-item-label']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__info-item-label']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__info-item-label']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__info-item-label']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__info-item-label']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__info-item-label']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__info-item-label']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__info-item-label']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-detail__interactions']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-dot']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-content']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-date']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-type']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-note']} */ ;
/** @type {__VLS_StyleScopedClasses['interaction-add-btn-container']} */ ;
/** @type {__VLS_StyleScopedClasses['interaction-add-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['interaction-add-btn-icon']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
