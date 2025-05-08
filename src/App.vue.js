import BaseHeader from './components/BaseHeader.vue';
import BaseFooter from './components/BaseFooter.vue';
import ContactPanel from './components/ContactPanel.vue';
import { ref } from 'vue';
import { contactsData } from './data/contacts';
import ContactForm from './components/ContactForm.vue';
import Modal from './components/Modal.vue';
import InteractionForm from './components/InteractionForm.vue';
const isMobile = ref(window.innerWidth < 768);
const isDetailOpen = ref(false);
const selectedId = ref(null);
const selectedContact = ref(null);
const isFormOpen = ref(false);
const contacts = ref(contactsData);
const editingContact = ref(null);
const isInteractionFormOpen = ref(false);
const addingContactId = ref('');
function selectContact(contact) {
    selectedContact.value = contact;
    if (isMobile.value) {
        isDetailOpen.value = true;
    }
}
function handleContactSubmit(contact) {
    const index = contacts.value.findIndex(c => c.id === contact.id);
    if (index !== -1) {
        //update the contact
        contacts.value.splice(index, 1, contact);
        selectedContact.value = { ...contact };
    }
    else {
        //add the new contact
        contacts.value.push(contact);
        selectedContact.value = contact;
    }
    isFormOpen.value = false;
    editingContact.value = null;
}
function openEditForm(contact) {
    editingContact.value = contact;
    isFormOpen.value = true;
}
function handleDeleteContact(contact) {
    contacts.value = contacts.value.filter(client => client.id !== contact.id);
    if (selectedId.value === contact.id) {
        selectedId.value = null;
        isDetailOpen.value = false;
    }
}
function handleAddInteraction({ contactId, interaction }) {
    console.log('[add] contactId =', contactId);
    console.log('[add] contact ids =', contacts.value.map(c => c.id));
    const idx = contacts.value.findIndex(c => c.id === contactId);
    console.log('[add] idx =', idx);
    if (idx === -1) {
        isInteractionFormOpen.value = false;
        console.log('contact not found,about add contact');
        return;
    }
    const old = contacts.value[idx];
    // 1. 產生全新的 contact 物件
    const updated = {
        ...old,
        interactions: [
            ...(old.interactions ?? []),
            interaction
        ].sort((a, b) => b.date.getTime() - a.date.getTime()), // 新→舊
        updatedAt: new Date()
    };
    // 2. 用 splice 把新物件塞回去
    contacts.value.splice(idx, 1, updated);
    // 3. 同步選取中的 contact（保證引用一致）
    if (selectedContact.value?.id === contactId) {
        selectedContact.value = updated;
    }
    // 4. 關掉表單
    isInteractionFormOpen.value = false;
}
function handleOpenAddInteraction(id) {
    if (!id)
        return;
    addingContactId.value = id; // 存起來
    isInteractionFormOpen.value = true;
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "card" },
});
/** @type {[typeof BaseHeader, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(BaseHeader, new BaseHeader({
    ...{ 'onCreate': {} },
}));
const __VLS_1 = __VLS_0({
    ...{ 'onCreate': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onCreate: (...[$event]) => {
        __VLS_ctx.isFormOpen = true;
    }
};
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    ...{ class: "body" },
});
/** @type {[typeof ContactPanel, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(ContactPanel, new ContactPanel({
    ...{ 'onEdit': {} },
    ...{ 'onDelete': {} },
    ...{ 'onOpenAddInteraction': {} },
    contacts: (__VLS_ctx.contacts),
    selected: (__VLS_ctx.selectedContact),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onEdit': {} },
    ...{ 'onDelete': {} },
    ...{ 'onOpenAddInteraction': {} },
    contacts: (__VLS_ctx.contacts),
    selected: (__VLS_ctx.selectedContact),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_10;
let __VLS_11;
let __VLS_12;
const __VLS_13 = {
    onEdit: (__VLS_ctx.openEditForm)
};
const __VLS_14 = {
    onDelete: (__VLS_ctx.handleDeleteContact)
};
const __VLS_15 = {
    onOpenAddInteraction: (__VLS_ctx.handleOpenAddInteraction)
};
var __VLS_9;
if (__VLS_ctx.isFormOpen) {
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
            if (!(__VLS_ctx.isFormOpen))
                return;
            __VLS_ctx.isFormOpen = false;
        }
    };
    __VLS_18.slots.default;
    /** @type {[typeof ContactForm, ]} */ ;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(ContactForm, new ContactForm({
        ...{ 'onSubmit': {} },
        contact: (__VLS_ctx.editingContact),
    }));
    const __VLS_24 = __VLS_23({
        ...{ 'onSubmit': {} },
        contact: (__VLS_ctx.editingContact),
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    let __VLS_26;
    let __VLS_27;
    let __VLS_28;
    const __VLS_29 = {
        onSubmit: (__VLS_ctx.handleContactSubmit)
    };
    var __VLS_25;
    var __VLS_18;
}
if (__VLS_ctx.isInteractionFormOpen) {
    /** @type {[typeof Modal, typeof Modal, ]} */ ;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(Modal, new Modal({
        ...{ 'onClose': {} },
    }));
    const __VLS_31 = __VLS_30({
        ...{ 'onClose': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    let __VLS_33;
    let __VLS_34;
    let __VLS_35;
    const __VLS_36 = {
        onClose: (...[$event]) => {
            if (!(__VLS_ctx.isInteractionFormOpen))
                return;
            __VLS_ctx.isInteractionFormOpen = false;
        }
    };
    __VLS_32.slots.default;
    /** @type {[typeof InteractionForm, ]} */ ;
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(InteractionForm, new InteractionForm({
        ...{ 'onAdd': {} },
        contactId: (__VLS_ctx.addingContactId),
    }));
    const __VLS_38 = __VLS_37({
        ...{ 'onAdd': {} },
        contactId: (__VLS_ctx.addingContactId),
    }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    let __VLS_40;
    let __VLS_41;
    let __VLS_42;
    const __VLS_43 = {
        onAdd: (__VLS_ctx.handleAddInteraction)
    };
    var __VLS_39;
    var __VLS_32;
}
/** @type {[typeof BaseFooter, ]} */ ;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent(BaseFooter, new BaseFooter({}));
const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['body']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            BaseHeader: BaseHeader,
            BaseFooter: BaseFooter,
            ContactPanel: ContactPanel,
            ContactForm: ContactForm,
            Modal: Modal,
            InteractionForm: InteractionForm,
            selectedContact: selectedContact,
            isFormOpen: isFormOpen,
            contacts: contacts,
            editingContact: editingContact,
            isInteractionFormOpen: isInteractionFormOpen,
            addingContactId: addingContactId,
            handleContactSubmit: handleContactSubmit,
            openEditForm: openEditForm,
            handleDeleteContact: handleDeleteContact,
            handleAddInteraction: handleAddInteraction,
            handleOpenAddInteraction: handleOpenAddInteraction,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
