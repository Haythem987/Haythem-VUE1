import {useNowRouteTitle, useRouteDefine} from "~/composables/useRouteParams";

export default defineNuxtRouteMiddleware((to, from) => {
        const route = useRouteDefine()
        const routeTitle = useNowRouteTitle()
        routeTitle.value = route.value.find(item => item.path === to.path)?.name || ''
    }
)