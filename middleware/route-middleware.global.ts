import {useNowRouteTitle, useRouteDefine} from "~/composables/useRouteParams";

export default defineNuxtRouteMiddleware((to, from) => {
        const route = useRouteDefine()
        const routeTitle = useNowRouteTitle()
        const routeIcon = useNowRouteIcon()
        routeIcon.value = route.value.find(item => item.path === to.path)?.icon || ''
        routeTitle.value = route.value.find(item => item.path === to.path)?.name || ''
    }
)