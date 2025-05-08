import { ref, computed } from 'vue';
const props = defineProps();
const __VLS_emit = defineEmits();
//create a ref for the search query
const searchQuery = ref('');
const selectedSort = ref('name');
const filteredContacts = computed(() => props.contacts
    .filter(contact => contact.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    .sort((a, b) => {
    if (selectedSort.value === 'name') {
        return a.name.localeCompare(b.name);
    }
    else if (selectedSort.value === 'createdAt') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    else if (selectedSort.value === 'status') {
        return a.status === 'active' ? -1 : 1;
    }
    return 0;
}));
function exportContactsToCSV() {
    const headers = ['Name', 'Email', 'Phone', 'Status', 'Company', 'Job Title', 'Notes', 'Created At', 'Updated At'];
    const rows = filteredContacts.value.map(contact => [
        contact.name,
        contact.email,
        contact.phone,
        contact.status,
        contact.company,
        contact.jobTitle,
        contact.notes,
        contact.createdAt.toISOString(),
        contact.updatedAt.toISOString()
    ]);
    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'contacts.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['contact-list__search-input']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-list__items']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-list__items']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-list__items']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "contact-list" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)({
    ...{ class: "contact-list__aside" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "contact-list__search" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "text",
    placeholder: "Search contact...",
    ...{ class: "contact-list__search-input" },
    value: (__VLS_ctx.searchQuery),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "sort-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "sort",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "sort-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    'stroke-width': "1.5",
    stroke: "currentColor",
    ...{ class: "size-6 sort-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    'stroke-linecap': "round",
    'stroke-linejoin': "round",
    d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    id: "sort",
    value: (__VLS_ctx.selectedSort),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "name",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "status",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "createdAt",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.exportContactsToCSV) },
    ...{ class: "export-button" },
});
const __VLS_0 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    icon: (['fas', 'file-csv']),
    size: "xl",
}));
const __VLS_2 = __VLS_1({
    icon: (['fas', 'file-csv']),
    size: "xl",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "contact-list__items" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "contact-items" },
});
for (const [contact] of __VLS_getVForSourceType((__VLS_ctx.filteredContacts))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.$emit('select', contact);
            } },
        key: (contact.id),
        ...{ class: (['contact-item', contact === __VLS_ctx.selected && 'selected']) },
    });
    (contact.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "contact-item__status" },
        ...{ class: (contact.status.toLowerCase()) },
    });
    (contact.status);
}
/** @type {__VLS_StyleScopedClasses['contact-list']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-list__aside']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-list__search']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-list__search-input']} */ ;
/** @type {__VLS_StyleScopedClasses['sort-container']} */ ;
/** @type {__VLS_StyleScopedClasses['sort-label']} */ ;
/** @type {__VLS_StyleScopedClasses['size-6']} */ ;
/** @type {__VLS_StyleScopedClasses['sort-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['export-button']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-list__items']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-items']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-item']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-item__status']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            searchQuery: searchQuery,
            selectedSort: selectedSort,
            filteredContacts: filteredContacts,
            exportContactsToCSV: exportContactsToCSV,
        };
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
