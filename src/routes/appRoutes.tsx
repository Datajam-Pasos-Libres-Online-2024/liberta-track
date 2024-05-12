import { RouteType } from "./config";
import HomePage from "../pages/home/HomePage";
import ModernSlaveryPageLayout from "../pages/modern-slavery/ModernSlaveryPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ModernSlaveryPage from "../pages/modern-slavery/BenchmarkingToolPage";
import ModernSlaveryIndex from "../pages/modern-slavery/ModernSlaveryIndex";
import ProfilePage from "../pages/profile/ProfilePage";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AnalyticsPage from "../pages/modern-slavery/PerformanceResultsPage";
import SaasPage from "../pages/modern-slavery/SaasPage";
import BenchmarkingToolPage from "../pages/modern-slavery/BenchmarkingToolPage";
import PerformanceResultsPage from "../pages/modern-slavery/PerformanceResultsPage";

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },
    {
        path: "/profile",
        element: <ProfilePage />,
        state: "profile",
        sidebarProps: {
            displayText: "Perfil",
            icon: <AccountBoxIcon />
        }
    },
    {
        path: "/modern-slavery",
        element: <ModernSlaveryPageLayout />,
        state: "modern-slavery",
        sidebarProps: {
            displayText: "Modern Slavery",
            icon: <DashboardOutlinedIcon />
        },
        child: [
            {
                index: true,
                element: <ModernSlaveryIndex />,
                state: "benchmarking-tool.index"
            },
            {
                path: "/modern-slavery/benchmarking-tool",
                element: <BenchmarkingToolPage />,
                state: "modern-slavery.benchmarking-tool",
                sidebarProps: {
                    displayText: "Benchmarking Tool"
                }
            },
            {
                path: "/modern-slavery/performance-results",
                element: <PerformanceResultsPage />,
                state: "modern-slavery.performance-results",
                sidebarProps: {
                    displayText: "Resultados de Desempeño"
                }
            }
        ]
    }
]

export default appRoutes