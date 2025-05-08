import ContactList from './ContactList.vue';
import ContactDetail from './ContactDetail.vue';
import Modal from './Modal.vue';
import { ref, onMounted, computed } from 'vue';
const props = defineProps();
const isMobile = ref(false);
const isDetailOpen = ref(false);
const selectedId = ref(props.contacts[0]?.id || null);
const selectedContact = computed(() => props.contacts.find(c => c.id === selectedId.value) || null);
function handleResize() {
    isMobile.value = window.innerWidth < 768;
}
onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
});
function selectContact(contact) {
    selectedId.value = contact.id;
    if (isMobile.value) {
        isDetailOpen.value = true;
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['contact-panel']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "contact-panel" },
});
/** @type {[typeof ContactList, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(ContactList, new ContactList({
    ...{ 'onSelect': {} },
    contacts: (__VLS_ctx.contacts),
    selected: (__VLS_ctx.selectedContact),
}));
const __VLS_1 = __VLS_0({
    ...{ 'onSelect': {} },
    contacts: (__VLS_ctx.contacts),
    selected: (__VLS_ctx.selectedContact),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onSelect: (__VLS_ctx.selectContact)
};
var __VLS_2;
if (!__VLS_ctx.isMobile) {
    /** @type {[typeof ContactDetail, ]} */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(ContactDetail, new ContactDetail({
        ...{ 'onEdit': {} },
        ...{ 'onDelete': {} },
        ...{ 'onOpenAddInteraction': {} },
        contact: (__VLS_ctx.selectedContact),
        key: (__VLS_ctx.selectedContact?.id),
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onEdit': {} },
        ...{ 'onDelete': {} },
        ...{ 'onOpenAddInteraction': {} },
        contact: (__VLS_ctx.selectedContact),
        key: (__VLS_ctx.selectedContact?.id),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_10;
    let __VLS_11;
    let __VLS_12;
    const __VLS_13 = {
        onEdit: (...[$event]) => {
            if (!(!__VLS_ctx.isMobile))
                return;
            __VLS_ctx.$emit('edit', __VLS_ctx.selectedContact);
        }
    };
    const __VLS_14 = {
        onDelete: (...[$event]) => {
            if (!(!__VLS_ctx.isMobile))
                return;
            __VLS_ctx.$emit('delete', __VLS_ctx.selectedContact);
        }
    };
    const __VLS_15 = {
        onOpenAddInteraction: (...[$event]) => {
            if (!(!__VLS_ctx.isMobile))
                return;
            __VLS_ctx.$emit('open-add-interaction', __VLS_ctx.selectedContact?.id);
        }
    };
    var __VLS_9;
}
if (__VLS_ctx.isMobile && __VLS_ctx.isDetailOpen) {
    /** @type {[typeof Modal, typeof Modal, ]} */ ;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(Modal, new Modal({
        ...{ 'onClose': {} },
    }));
    const __VLS_17 = __VLS_16({
        ...{ 'onClose': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    let __VLS_19;
    let __VLS_20;
    let __VLS_21;
    const __VLS_22 = {
        onClose: (...[$event]) => {
            if (!(__VLS_ctx.isMobile && __VLS_ctx.isDetailOpen))
                return;
            __VLS_ctx.isDetailOpen = false;
        }
    };
    __VLS_18.slots.default;
    /** @type {[typeof ContactDetail, ]} */ ;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(ContactDetail, new ContactDetail({
        ...{ 'onEdit': {} },
        ...{ 'onDelete': {} },
        ...{ 'onOpenAddInteraction': {} },
        contact: (__VLS_ctx.selectedContact),
        key: (__VLS_ctx.selectedContact?.id),
    }));
    const __VLS_24 = __VLS_23({
        ...{ 'onEdit': {} },
        ...{ 'onDelete': {} },
        ...{ 'onOpenAddInteraction': {} },
        contact: (__VLS_ctx.selectedContact),
        key: (__VLS_ctx.selectedContact?.id),
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    let __VLS_26;
    let __VLS_27;
    let __VLS_28;
    const __VLS_29 = {
        onEdit: (...[$event]) => {
            if (!(__VLS_ctx.isMobile && __VLS_ctx.isDetailOpen))
                return;
            __VLS_ctx.$emit('edit', __VLS_ctx.selectedContact);
        }
    };
    const __VLS_30 = {
        onDelete: (...[$event]) => {
            if (!(__VLS_ctx.isMobile && __VLS_ctx.isDetailOpen))
                return;
            __VLS_ctx.$emit('delete', __VLS_ctx.selectedContact);
        }
    };
    const __VLS_31 = {
        onOpenAddInteraction: (...[$event]) => {
            if (!(__VLS_ctx.isMobile && __VLS_ctx.isDetailOpen))
                return;
            __VLS_ctx.$emit('open-add-interaction', __VLS_ctx.selectedContact?.id);
        }
    };
    var __VLS_25;
    var __VLS_18;
}
/** @type {__VLS_StyleScopedClasses['contact-panel']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ContactList: ContactList,
            ContactDetail: ContactDetail,
            Modal: Modal,
            isMobile: isMobile,
            isDetailOpen: isDetailOpen,
            selectedContact: selectedContact,
            selectContact: selectContact,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
