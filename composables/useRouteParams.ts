export interface RouterItem{
    name: string;
    path: string;
}
export const useRouteDefine=()=>{
    return useState<RouterItem[]>('routeDefine',()=>[
        {name: '首页', path: '/', icon: "HomeFilled"},
        {name: '计数器', path: '/counter', icon: "Odometer"},
        {name: '收藏列表', path: '/collections', icon: "Star"},
    ])
}
export const useNowRouteTitle=()=>{
    return useState<string>('nowRouteTitle',()=>'')
}