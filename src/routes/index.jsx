import { lazy } from "react";


const StaggeredAnimation = lazy(() => import('../components/staggeredAnimation'));
const AnimationEffects = lazy(() => import('../components/animationEffects'));
const TextAnimation = lazy(() => import('../components/textAnimation'));
const AuroraEffect = lazy(() => import('../components/auroraEffect'));
const Example = lazy(() => import('../components/examples/Example'));
const PopUpEffect = lazy(() => import('../components/popUp'));


// const ModalOpeningAnimation = lazy(() => import('../components/modalOpeningAnimation'));
// const PageScrollNavbarHide = lazy(() => import('../components/pageScrollNavbarHide'));
// const CurvedSidebarMenu = lazy(() => import('../components/curvedSidebarMenu'));
// const MountingAnimation = lazy(() => import('../components/mountingAnimation'));
// const MultilevelMenu = lazy(() => import('../components/multilevelMenu'));
// const TabListContainer = lazy(() => import('../components/tabHover'));


export const routes = [
    {
        title: 'Example',
        path: '/example',
        component: Example,
        date: '22-May-24',
    },
    {
        title: 'Aurora Effect',
        path: '/aurora-effect',
        component: AuroraEffect,
        date: '23-May-24',
    },
    {
        title: 'Staggered Animation',
        path: '/staggered-animation',
        component: StaggeredAnimation,
        date: '24-May-24',
    },
    {
        title: 'PopUp',
        path: '/popUp',
        component: PopUpEffect,
        date: '27-May-24',
    },
    {
        title: 'Text Animation',
        path: '/text-animation',
        component: TextAnimation,
        date: '26-May-24',
    },
    {
        title: 'Animation Effects',
        path: '/animation-effects',
        component: AnimationEffects,
        date: '29-May-24',
    },
    // {
    //     title: 'Mounting Animation',
    //     path: '/mounting-animation',
    //     component: MountingAnimation,
    //     date: '03-June-24',
    // },
    // {
    //     title: 'Tab Hover Animation',
    //     path: '/tab-hover-effect',
    //     component: TabListContainer,
    //     date: '04-June-24',
    // },
    // {
    //     title: 'Page Scroll - Navbar Hide',
    //     path: '/page-Scroll-Navbar-Hide',
    //     component: PageScrollNavbarHide,
    //     date: '05-June-24',
    // },
    // {
    //     title: 'Modal Opening Animation',
    //     path: '/modal-opening-animation',
    //     component: ModalOpeningAnimation,
    //     date: '06-June-24',
    // },
    // {
    //     title: 'Curved Sidebar Menu',
    //     path: '/curved-sidebar-menu',
    //     component: CurvedSidebarMenu,
    //     date: '06-June-24',
    // },
    // {
    //     title: 'Multilevel Menu by JSON',
    //     path: '/multilevelMenu',
    //     component: MultilevelMenu,
    //     date: '06-June-24',
    // },    
]