export interface RouterItem{
    name: string;
    path: string;
}
export const useRouteDefine=()=>{
    return useState<RouterItem[]>('routeDefine',()=>[
        {name:'首页',path:'/',},
        {name:'计数器',path:'/counter',},
        {name:'信息‘',path:'/info',},
    ])
}
export const useNowRouteTitle=()=>{
    return useState<string>('nowRouteTitle',()=>'')
}