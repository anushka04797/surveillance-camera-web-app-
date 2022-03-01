import React from 'react';
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));


const routes = [
    { path: '/dashboard',exact:true, name: 'Dashboard', component: Dashboard},
    { path: '/dashboard/agent-tracking',exact:true, name: 'Agent Tracking', component: React.lazy(()=>import('../pages/agent-track/index'))},
]

export default routes