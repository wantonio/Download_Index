angular.module('downloadIndex', ['ngAnimate'], function(){
}).controller('downloadListCtrl', function ($scope) {
    $scope.productCat = [{
            category: "NM",
            featured: "yes",
            code: "NPM",
            name: "Network Performance Monitor",
            subTitle: "Powerful Network Fault & Availability Management",
            icon: "icon-npmBk.png",
            iconhover: "icon-npmOr.png",
            bullets: ["Simplifies detection, diagnosis, & resolution of network issues – before outages occur", "Tracks response time, availability, & uptime of routers, switches, & other SNMP-enabled devices", "Shows performance statistics in real time via dynamic, drillable network maps", " Includes out-of-the-box dashboards, alerts, reports, & expert guidance on what to monitor & how", "Automatically discovers SNMP-enabled network devices & typically deploys in less than an hour"],
            donwloadLink: "/register/index.aspx?Program=607&c=70150000000Dlbw",
            demolink: "http://oriondemo.solarwinds.com/Orion/SummaryView.aspx?ViewKey=NPM%20Summary&AccountID=guest&password=orion",
            imageLink: "http://web.swcdn.net/v7.0/creative/images/screenshots/products/NPM/Sm/En/0004_NPM_10-2_ConnectNow-Network-Mapping_Sm_EN.jpg",
            productPageLink: "/network-performance-monitor/network-monitoring.aspx",
            sistemRequirements: {
                cpu: "Dual processor, 3 GHz",
                datbase: "SQL Server® 2005 SP1 Express, Standard, Enterprise SQL Server 2008 Express, Standard, or Enterprise, SQL Server 2008 R2, or SQL Server 2012",
                hardDrive: "20 GB",
                memory: "3 GB",
                net: "Version 3.5 or later",
                os: "Windows® 2003 & 2008 Server (32-bit or 64-bit) including R2, with IIS installed, running in 32-bit mode"
            },
            tags: "Network Monitoring Software, Network Performance Monitor, Networking Management, Networking Software, NPM, Network Device Mapping Topology Diagrams, Orion, Orion platform"
        },
        /*-----end of product-------*/
        {
            category: "NM",
            featured: "no",
            code: "IPAM",
            name: "IP Address Manager",
            subTitle: "Centralized IP Address Management, Monitoring, Alerting, and Reporting",
            icon: "icon-ipamBk.png",
            bullets: ["Centralizes IP infrastructure management, monitoring, alerting and reporting", "Automatically scans IP address space at customizable, scheduled intervals ", "Consolidates multi-vendor DHCP/DNS management  via a single, integrated interface", "Delivers real-time, at-a-glance dashboard visibility along with historical tracking", "Provides active IP address conflict detection and preventative alerts"],
            donwloadLink: "/register/index.aspx?Program=911&c=70150000000Eehi",
            demolink: "http://configuration.demo.solarwinds.com/Orion/IPAM/IPAMSummaryView.aspx/?AccountID=CONFguest&password=orion",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/IPAM/Sm/En/0023_IPAM_4-0_Unified-IP-Address-Infrastructure-Management_Sm_EN.jpg",
            productPageLink: "/ip-address-manager/ip-address-management.aspx",
            sistemRequirements: {
                cpu: " <p>IP1000 – 2.0 GHz (Dual Core Recommended)<br>IP4000 – 2.4 GHz (Dual Core Recommended)<br>IP16000 & IPX – 3.0 GHz (Dual Core Recommended)</p>",
                datbase: "<li>SQL Server 2005 SP1, 2005 SP2, 2005 SP3, 2005 SP4</li><li>SQL 2008 without SP, 2008 SP1, 2008 SP2, 2008 SP3</li><li>SQL 2008 R2 without SP, 2008 R2 SP1, 2008 R2 SP2</li><li>SQL 2012, SQL 2012 SP1</li>",
                hardDrive: "<li>IP1000 – 2 GB</li><li>IP4000 – 5 GB</li><li>IP16000 & IPX – 20 GB</li>",
                memory: "IP1000 – 3 GB<br>IP4000 – 4 GB<br>IP16000 & IPX – 4 GB</p>",
                net: "Version 3.5 or later (.NET Framework 4.0 is recommended)",
                os: "Windows® 2003 & 2008 Server (32-bit or 64-bit) including R2, with IIS installed, running in 32-bit mode"
            },
            tag: "IP Address Manager, IP Address Software, IP Address Monitoring, IP Address Management Tool, IPAM Solutions, IPAM Software, IPAM, IP Address Conflict Detection, DNS management, DHCP management, Subnet Scan, Subnet allocation, IP Address history, DHCP scope utilization., IP Address Tracking"
        },
        /*-----end of product-------*/
        {
            category: "NM",
            featured: "no",
            code: "NTA",
            name: "NetFlow Traffic Analyzer",
            subTitle: "Real Time Network Utilization & Bandwidth Monitoring",
            icon: "icon-ntaBk.png",
            bullets: ["Monitors network bandwidth & traffic patterns down to the interface level", "Identifies which users, applications, & protocols are consuming the most bandwidth", "Highlights the IP addresses of top talkers", "Analyzes Cisco® NetFlow, Juniper® J-Flow, IPFIX, sFlow®, Huawei NetStream™ & other flow data", "Typically deploys in less than an hour"],
            donwloadLink: "/register/index.aspx?Program=815&c=70150000000CgeI",
            demolink: "http://oriondemo.solarwinds.com/Orion/TrafficAnalysis/SummaryView.aspx/?AccountID=Guest&password=orion",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/NTA/Sm/En/0005_NTA_3-8_Traffic-Analysis-Dashboard_Sm_EN.jpg",
            productPageLink: "/netflow-traffic-analyzer/network-traffic-analysis.aspx",
            sistemRequirements: {
                cpu: "3 GHz",
                datbase: "SQL Server® 2005 SP1 Express, Standard or Enterprise or SQL Server 2008 Express, Standard, or Enterprise",
                hardDrive: "20 GB",
                memory: "3 GB",
                net: "none",
                os: "Windows® 2003 & 2008 Server (32-bit or 64-bit), with IIS installed"
            },
            tags: "Netflow Analyzer, Netflow Traffic Analyzer, Netflow Data, Netflow Reporting, Netflow Traffic Analysis, Netflow Monitoring Software, NTA, Network Bandwidth Monitoring Management, Network Traffic Monitoring Management, Orion, Orion platform"
        },
        /*-----end of product-------*/
        {
            category: "NC",
            featured: "no",
            code: "NBAP",
            name: "Network Bandwidth Analyzer Pack",
            subTitle: "Comprehensive Network Bandwidth Analysis & Performance Monitoring",
            icon: "icon-npmBk.png",
            bullets: ["Detect, diagnose, and resolve network performance issues", "Track response time, availability, and uptime of routers, switches, and other SNMP-enabled devices", "Monitor and analyze network bandwidth performance and traffic patterns", "Identify bandwidth hogs and see which applications are using the most bandwidth", "Graphically display performance metrics in real time via dynamic interactive maps"],
            donwloadLink: "/register/index.aspx?program=856&c=70150000000PahF",
            demolink: "http://oriondemo.solarwinds.com/Orion/Login.aspx?sessionTimeout=yes&ReturnUrl=%2fOrion%2fTrafficAnalysis%2fSummaryView.aspx",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/NTA/Sm/En/0005_NTA_3-8_Traffic-Analysis-Dashboard_Sm_EN.jpg",
            productPageLink: "/lp/network-bandwidth-analyzer-pack.aspx",
            sistemRequirements: {
                cpu: "none",
                datbase: "none",
                hardDrive: "none",
                memory: "none",
                net: "none",
                os: "none"
            },
            tags: "Network Bandwidth Analyzer Pack, network, bandwidth, analyzer, pack"
        },
        /*-----end of product-------*/
        {
            category: "NM",
            featured: "no",
            code: "VOIP",
            name: "VoIP & Network Quality Manager",
            subTitle: "Proactive VoIP & WAN Performance Monitoring & Troubleshooting",
            icon: "icon-voipBk.png",
            bullets: ["Monitors VoIP call Quality of Service (QoS) metrics including jitter, latency, packet loss, and MOS ", "Correlates call issues with WAN performance for advanced troubleshooting", "Searches & filters call detail records", "Monitors site-to-site WAN performance using Cisco IP SLA technology", "Automatically discovers Cisco IP SLA enabled network devices & typically deploys in less than an hour"],
            donwloadLink: "/register/index.aspx?Program=945&c=70150000000PW2r",
            demolink: "http://oriondemo.solarwinds.com/Orion/Voip/Summary.aspx?Tab=IpSla&AccountID=Guest&password=orion",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/VNQM/Sm/EN/0005_VNQM_4-0_VoIP-and-WAN-Monitoring-Dashboards_Sm_EN.jpg",
            productPageLink: "/voip-network-quality-manager/voip-wan-qos-management.aspx",
            sistemRequirements: {
                cpu: "Dual processor, 3GHz",
                datbase: "SQL Server® 2005 SP1 Express, Standard, Enterprise SQL Server 2008 Express, Standard or Enterprise",
                hardDrive: "20 GB",
                memory: "3 GB",
                net: "Version 3.5 or later",
                os: "Windows® 2003 & 2008 Server (32-bit or 64-bit) including R2, with IIS installed, running in 32-bit mode Windows 2008 Server (32-bit or 64-bit) with IIS installed, running in 32-bit mode"
            },
            tags: "VoIP Monitoring, VoIP Troubleshooting, VoIP and WAN Performance Monitoring, VoIP and WAN Monitoring Software, WAN Performance Monitoring, WAN Performance Software, VNQM, Call troubleshooting, Conference Call Troubleshooting, Call Signaling, Call Quality Monitoring, Trunk Utilization, Orion, Orion platform"
        },
        /*-----end of product-------*/
        {
            category: "NM",
            featured: "no",
            code: "UDT",
            name: "User Device Tracker",
            subTitle: "Automated Device Tracking & Switch Port Management",
            icon: "icon-udtBk.png",
            bullets: ["Automatically discovers, maps and monitors switches, ports, and network devices ", "Quickly finds devices and retrieves user name, port details, connection history and more", "Enables searching on IP address, user name, Hostname or MAC address to track endpoints", "Allows whitelisting and watch lists with automatic alerts and click-of-a-button port shutdown", "Provides detailed switch port usage data, capacity analysis, and built-in reporting"],
            donwloadLink: "/register/index.aspx?Program=1419&c=70150000000P5KS",
            demolink: "http://oriondemo.solarwinds.com/Orion/UDT/Summary.aspx/?AccountID=Guest&password=orion",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/UDT/Sm/EN/0006_UDT_2-0_Automated-Switch-Port-Discovery_Sm_EN.jpg",
            productPageLink: "/user-device-tracker/switch-port-monitoring-mapping.aspx",
            sistemRequirements: {
                cpu: "Dual processor, 3 GHz",
                datbase: "SQL Server® 2005 SP1 Express, Standard, or Enterprise / SQL Server 2008 Express, Standard, or Enterprise, or SQL Server 2008 R2 / SQL Server 2012 Express, Standard, or Enterprise",
                hardDrive: "20 GB",
                memory: "4 GB",
                net: ".NET 3.5 SP1 or .NET 4.0",
                os: "Windows® Server 2003, 2008, & 2012 (32-bit or 64-bit), and with IIS installed, running in 32-bit mode"
            },
            tags: "User Device Tracking Software, Switch Port Management, Switch Monitoring, Whitelist, Port Shutdown, Watchlist, MAC Address, UDT, Orion, Orion platform"
        },
        /*-----end of product-------*/
        {
            category: "NC",
            featured: "no",
            code: "IPCB",
            name: "IP Control Bundle",
            subTitle: "Integrated IP Space Management & Endpoint Tracking",
            icon: "icon-ipamBk.png",
            bullets: ["Enables increased control over IP address proliferation and mobile network devices", "Provides integrated IP management, switch port monitoring, and endpoint tracking", "Delivers centralized visibility into IP address usage and connected users and devices", "Performs automated IP space scanning and network device discovery", "Simplifies IP infrastructure troubleshooting and enhances network access security"],
            donwloadLink: "/register/registrationb.aspx?program=17287&c=70150000000PaQ9",
            demolink: "none",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/IPAM/Sm/EN/IPAM_screenshot_sm.png",
            productPageLink: "none",
            sistemRequirements: {
                cpu: "none",
                datbase: "none",
                hardDrive: "none",
                memory: "none",
                net: "none",
                os: "none"
            },
            tags: "IP Control Bundle, ip, control, bundle"
        },
        /*-----end of product-------*/
        {
            category: "NM",
            featured: "no",
            code: "NCM",
            name: "Network Configuration Manager",
            subTitle: "Automated Network Configuration & Change Management",
            icon: "icon-ncmBk.png",
            bullets: ["Enables bulk change deployment to thousands of devices", "Performs automatic, scheduled network configuration backups", "Protects against unauthorized & erroneous network changes", "Detects & reports on network compliance policy violations", "Provides real-time network inventory & asset service management"],
            donwloadLink: "/register/index.aspx?Program=617&c=70150000000E1Ii",
            demolink: "http://oriondemo.solarwinds.com/Orion/NCM/Summary.aspx/?AccountID=Guest&password=orion",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/NCM/Sm/En/0014_NCM_7-0_Integration-with-SolarWinds-Network-Performance-Monitor__Sm_EN.jpg",
            productPageLink: "/network-configuration-manager/network-configuration-change-management.aspx",
            sistemRequirements: {
                cpu: "Dual processor, 3.0 GHz",
                datbase: "SQL Server 2005 SP1, 2005 SP2, 2005 SP3, 2005 SP4, SQL 2008 without SP, 2008 SP1, 2008 SP2, 2008 SP3, SQL 2008 R2 without SP, 2008 R2 SP1, 2008 R2 SP2, SQL 2012, SQL 2012 SP1",
                hardDrive: "20 GB",
                memory: "3 GB",
                net: "NET 3.5 SP1 + .NET 4.0",
                os: "Windows Server 2003 SP2 and 2003 R2 SP2 (32-bit & 64-bit), Windows Server 2008, 2008 SP2, 2008 R2 and 2008 R2 SP1, Windows Server 2012"
            },
            tags: "Network Configuration Management, Configuration Backup, Change Detection, Policy Compliance, Inventory, Bulk Change, End of Life, NCM, Cirrus, Orion, Orion platform"
        },
        /*-----end of product-------*/
        {
            category: "LEM",
            featured: "no",
            code: "FSM",
            name: "Firewall Security Manager",
            subTitle: "Multi-vendor Firewall Security & Change Management",
            icon: "icon-fsmBk.png",
            bullets: ["Automates security audits using over 120 customizable, out-of the-box checks based on standards from NSA, NIST, SANS and more", "Analyzes firewall configs and logs to isolate redundant, covered and unused rules and objects", "Models how a new rule, or change to an existing one, will impact your firewall policy—without touching production devices", "Simplifies firewall troubleshooting and change management for your multi-vendor, Layer 3 network devices", "Deploys quickly and easily; scan your inventory for high-risk firewalls and assess your risk profile in minutes"],
            donwloadLink: "/register/index.aspx?Program=17188&c=70150000000PX9P",
            demolink: "http://demo.solarwinds.com/flashdemo/fsm/",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/FSM/Sm/EN/0004_FSM_6-0_Firewall-Inventory-and-Details-Dashboard_Sm_EN.jpg",
            productPageLink: "/firewall-security-manager/firewall-management.aspx",
            sistemRequirements: {
                cpu: "Minimum: Intel Pentium-compatible 2GHz or faster, For Large Firewall configuration: Intel Pentium-compatible 64-bit 2GHz or faster",
                datbase: "none",
                hardDrive: "Minimum: 1GB of drive space (and 10GB of temp space), For Large Firewall Configuration: 1GB of drive space (and 50GB of temp space)",
                memory: "Minimum: 2GB, For Large Firewall Configuration: 4GB memory (RAM) (8GB RAM recommended)",
                net: "none",
                os: "Minimum: Windows 7, Windows Vista, Windows 2003 Server SP2, Windows XP (SP2 or later), Windows 2000, Windows 2000 Server For Larger Firewall Configuration: 64-bit Windows 7, 64-bit Windows 2008 Server R2, 64-bit Windows XP Pro"
            },
            tags: "Firewall Security, Security Management Software, Firewall Security Management, Firewall Security Software, Firewall Change Management, Security Automation, FSM"
        },
        /*-----end of product-------*/
        {
            category: "NM",
            featured: "no",
            code: "ET",
            name: "Engineer’s Toolset",
            subTitle: "Over 50 Must-Have Network Tools",
            icon: "icon-toolSetBk.png",
            bullets: ["All the network tools you need in one complete & affordable package", "Monitoring tools include Real-Time Interface Monitor, SNMP Real-Time Graph, & more", "Diagnostic tools include Ping Sweep, DNS Analyzer, and Trace Route, & more", "Network discovery tools include Port Scanner, Switch Port Mapper, Advanced Subnet Calculator, & more", "Cisco® management tools include Real-time NetFlow Analyzer, Config Downloader, & more"],
            donwloadLink: "/register/index.aspx?Program=428&c=70150000000D8FL",
            demolink: "none",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/ETS/Sm/En/0001_ETS_10-7_Toolset-Launchpad_Sm_EN.jpg",
            productPageLink: "/engineers-toolset/network-troubleshooting.aspx",
            sistemRequirements: {
                cpu: "500MHz",
                datbase: "none",
                hardDrive: "At least 640MB",
                memory: "128MB",
                net: "none",
                os: "Microsoft Windows 7, Vista Business and Ultimate Editions, XP SP3, Server 2008 and R2, and Windows Server 2003 SP1 and R2. .Net Framework Version 3.5 SP1 or later."
            },
            tags: "Network Diagnostic Tools, Networking Tools, Network Tools, Monitoring, Monitoring Tools, Monitoring Software, Cisco Management Tools, Network Discovery Tools"
        },
        /*-----end of product-------*/
        {
            category: "NM",
            featured: "no",
            code: "NTM",
            name: "Network Topology Mapper",
            subTitle: "Map Your Network Automatically in Just Minutes",
            icon: "icon-ntmBk.png",
            bullets: ["Automatically discovers and diagrams network topology", "Supports multiple discovery methods including SNMP, ICMP, WMI, CDP, VMware, & more", "Exports network maps to Microsoft Office<sup style='vertical-align:super;'>®</sup>Visio<sup style='vertical-align: super;'>®</sup>, PDF, and PNGformats", "Deliversreports on switch ports, VLANs, subnets, and inventory", "Addresses reporting needs for PCI compliance and other regulatory requirements"],
            donwloadLink: "/register/index.aspx?Program=17592&c=70150000000PjNE",
            demolink: "none",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/NTM/Sm/EN/0003_NTM_1-0_Network-Mapping-Regulartory-Compliance_Sm_EN.jpg",
            productPageLink: "/network-topology-mapper/network-mapping-software.aspx",
            sistemRequirements: {
                cpu: "2.66Ghz processor",
                datbase: "none",
                hardDrive: "10GB",
                memory: "500MB RAM",
                net: "3.5 or 4.0",
                os: "Windows XP – Windows 8 desktop OS and Windows Server 2003-2012"
            },
            tags: "Network Mapping Software, Network Mapping Tools, Network Topology Software, Network Topology Tools, NTM"
        },
        /*-----end of product-------*/
        {
            category: "SM",
            featured: "no",
            code: "WHD",
            name: "Web Help Desk",
            subTitle: "Web-based IT Help Desk and Asset Management",
            icon: "icon-whdBk.png",
            bullets: ["Streamlines the help desk ticket process from request to resolution", "Includes fully-customizable forms that are easy to change to match your IT support workflows", "Manages and tracks the full lifecycle of hardware and software assets", "Supports self-resolution of issues with a searchable knowledge base", "Affordable, per-seat pricing for technician logins – no hidden costs for end-user logins or managed IT assets"],
            donwloadLink: "/register/index.aspx?program=12124&c=70150000000PVZ5",
            demolink: "http://webhelpdesk.demo.solarwinds.com/helpdesk/WebObjects/Helpdesk.woa/wa/login?username=admin&password=admin",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/WDH/Sm/EN/0002_WHD_X_New-Ticket_Sm_EN.jpg",
            productPageLink: "/solutions/it-help-desk.aspx",
            sistemRequirements: {
                cpu: "none",
                datbase: "none",
                hardDrive: "none",
                memory: "none",
                net: "none",
                os: "none"
            },
            tags: "Web Help Desk Software, IT Administration Software, Help Desk, ITSM, ITIL, Asset Management, Service Desk"
        },
        /*-----end of product-------*/
        {
            category: "SM",
            featured: "no",
            code: "MA",
            name: "Mobile Admin",
            subTitle: "Mobile IT monitoring & management for after-hours support",
            icon: "icon-mobileBk.png",
            bullets: ["<span style='color: #f89d1c'><strong>Now available for unlimited users at one low price.  Ask us about Mobile Admin MAX!</strong></span>", "Troubleshoot & resolve IT issues in a few clicks from any smartphone or tablet", "Supports all key IT infrastructure technologies – AD, VMware, Backup Exec, Exchange & more!", "Delivers real-time alerts and statuses on your Android, iOS, and Blackberry devices", "Remote control with SSH, Telnet, VNC, RDP, proxy via Mobile Admin Server or direct connect"],
            donwloadLink: "/register/index.aspx?program=12031&c=70150000000PQHD",
            demolink: "http://demo.solarwinds.com/flashdemo/ma/",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/MA/Sm/0004_MA_1-0_Active-Directory_Sm_EN.jpg",
            productPageLink: "/solutions/mobile-IT-administration-app.aspx",
            sistemRequirements: {
                cpu: "none",
                datbase: "none",
                hardDrive: "none",
                memory: "none",
                net: "none",
                os: "none"
            },
            tags: "IT Administration Software, IT Administration Application, Mobile IT Monitoring and Management, Mobile Administration Software, SolarWinds Mobile, NPM Mobile, SAM Mobile, Orion Mobile, Mobile, VMware, Active Directory, Exchange, Backup"
        },
        /*-----end of product-------*/
        {
            category: "NC",
            featured: "no",
            code: "NGB",
            name: "Network Guardian Bundle",
            subTitle: "Automated Firewall Change Management & Policy Compliance",
            icon: "icon-fsmBk.png",
            bullets: ["Detects firewall changes & reports on policy violations", "Automatically backs up firewall configurations on a scheduled basis", "Enables firewall change modeling, verification & deployment", "Provides firewall configuration comparisons with rollback ability", "Delivers detailed network security & compliance reports"],
            donwloadLink: "/register/registrationb.aspx?program=17528&c=70150000000PdY6",
            demolink: "none",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/FSM/Sm/EN/0004_FSM_6-0_Firewall-Inventory-and-Details-Dashboard_Sm_EN.jpg",
            productPageLink: "/lp/network-guardian-bundle.aspx",
            sistemRequirements: {
                cpu: "none",
                datbase: "none",
                hardDrive: "none",
                memory: "none",
                net: "none",
                os: "none"
            },
            tags: "Network Gardian Bundle, Network, Gardian, Bundle"
        },
        /*-----end of product-------*/
        {
            category: "SM",
            featured: "yes",
            code: "SAM",
            name: "Server & Application Monitor",
            subTitle: "Server Monitoring Made Simple – Deploy, Monitor & Resolve",
            icon: "icon-samBk.png",
            bullets: ["Quickly downloads and <strong>deploys in less than an hour</strong>, is simple to use, and easy on your budget", "<strong>Multi-vendor hardware monitoring</strong> for HP® ProLiant®, IBM System x®, Dell™ PowerEdge™, blade chassis, and VMware® ESX/ESXi hosts", "Application monitoring and user experience for virtually <strong>any application</strong> – Microsoft® Exchange, Active Directory®, IIS, any ODBC database, and more", "Eliminate the guess work with <strong>expert guidance</strong> on what to monitor, why to monitor it, and optimal thresholds", "<strong>Resolve problems</strong> quickly with built-in server management to start/stop services, kill processes, and restart servers"],
            donwloadLink: "/register/index.aspx?Program=857&c=70150000000Dtb9",
            demolink: "http://systems.demo.solarwinds.com/Orion/Apm/Summary.aspx/?AccountID=SYSguest&password=orion",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/SAM/Sm/En/0019_SAM_5-0_Extensible-Monitoring-for-Custom-Applications-and-Scripts_Sm_EN.jpg",
            productPageLink: "/server-application-monitor/server-application-monitoring.aspx",
            sistemRequirements: {
                cpu: "2.4Ghz min",
                datbase: "SolarWinds SAM (formerly named APM) version 4.0 and higher requires SQL Server 2005 SP1 or later, including SQL Server 2008 and 2012.",
                hardDrive: "4GB free disk space min",
                memory: "4GB min",
                net: "Version 3.5 .NET Framework, 4.0 is recommended",
                os: "Windows Server 2003 or Windows Server 2008 R2, and Windows Server 2012, with IIS in 32-bit mode. Microsoft IIS, version 6.0 and higher, in 32-bit mode must be installed."
            },
            tags: "Server Monitoring, Server Monitoring Software, Server Monitor, Application Monitoring, Application Monitoring Software, Server and Application Monitoring, Server and Application Monitor, SAM, Windows Event Log, SQL Server Performance, SQL Server Monitoring, SQL monitoring, Microsoft Active Directory Performance Monitoring Management, Microsoft Windows Server Monitoring Management, Microsoft SQL Server Performance, Microsoft SQL Server Monitoring, Orion, Orion platform"
        },
        /*-----end of product-------*/
        {
            category: "SM",
            featured: "no",
            code: "VM",
            name: "Virtualization Manager",
            subTitle: "Comprehensive Virtualization Management – From VM to Spindle",
            icon: "icon-vmanBk.png",
            bullets: ["Real-time dashboards simplify Identification & troubleshooting of performance, capacity & configuration problems", "Identifies VM sprawl, helps you reclaim & optimize space & reduces licensing costs", "Integration with Server & Application Monitor provides application stack management from app to datastore", "All the functionality & more of other leading virtualization management tools – at a fraction of the cost", "Easy to download, deploy & use – start monitoring your VMs in less than an hour"],
            donwloadLink: "/register/index.aspx?Program=1461&c=70150000000P84F",
            demolink: "http://virtualization.demo.solarwinds.com/",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/VM/Sm/EN/0011_VM_4-1_Heterogeneous-Virtualization-Management_Sm_EN.jpg",
            productPageLink: "/virtualization-manager/virtualization-management.aspx",
            sistemRequirements: {
                cpu: "4 vCPU",
                datbase: "Integrated with Virtual Appliance",
                hardDrive: "200 GB+ (can be thin provisioned)",
                memory: "8 GB+",
                net: "none",
                os: "Runs on VMware vSphere™ v5.x, 4.x, or Microsoft® Hyper-V 2008/2012"
            },
            tags: "Virtualization Management, Virtualization Management Software, Performance Monitoring and Management, VMware vSphere Performance Monitoring Management"
        },
        /*-----end of product-------*/
        {
            category: "SM",
            featured: "no",
            code: "SM",
            name: "Storage Manager, Powered by Profiler",
            subTitle: "Multi-Vendor Storage Performance & Capacity Management",
            icon: "icon-smBk.png",
            bullets: ["Monitors storage performance & isolates hotspots in your multi-vendor SAN fabric", "Maps virtual machines to physical storage", "Automates storage capacity planning & reporting", "Simplifies analysis of storage usage & reclamation of storage space", "Easy to download, deploy, & use – start monitoring your storage infrastructure in less than an hour"],
            donwloadLink: "/register/index.aspx?Program=1457&c=70150000000P83v",
            demolink: "http://storage.demo.solarwinds.com/",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/STM/Sm/EN/0004_STM_5-1_Heterogeneous-Storage-Management_Sm_EN.jpg",
            productPageLink: "/storage-manager/data-storage-management.aspx",
            sistemRequirements: {
                cpu: "2 CPUs",
                datbase: "MySQL Database embedded in installation.",
                hardDrive: "50 GB",
                memory: "8 GB",
                net: "none",
                os: "Windows 2003/2008/2012 64-bit; Linux RedHat/SUSE/CentOS 64-bit"
            },
            tags: "Storage Performance Management, Storage Capacity Management, Storage Performance and Capacity Management Software"
        },
        /*-----end of product-------*/
        {
            category: "SM",
            featured: "no",
            code: "PM",
            name: "Patch Manager",
            subTitle: "Automated Patching of Microsoft® & 3rd-Party Apps",
            icon: "icon-pmBk.png",
            bullets: ["<span style='color: #f89d1c'><strong>New! Quickly patch the latest Oracle Java 7 update FREE with our 30-day evaluation</strong></span>", "Reduce time from weeks to minutes for patching physical & virtual Windows® desktops & servers with pre-built, tested patches from vendors such as Adobe®, Apple®, Google®, Mozilla®, Oracle® & others", "Decrease security risks & service performance degradation by controlling when & where patches are applied", "Pass audits and demonstrate compliance with out-of-the-box reports and dashboard views", "Extend your WSUS or SCCM patch management environment to apply common 3rd-party patches for Adobe®, Apple®, Google®, Mozilla®, and Oracle® Java™ management solution"],
            donwloadLink: "/register/index.aspx?program=1946&c=70150000000PKvC",
            demolink: "http://systems.demo.solarwinds.com/Orion/PM/Summary.aspx/?AccountID=SYSguest&password=orion",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/PM/Sm/EN/0007_PM_1-7_Status-and-Compliance-Reporting_Sm_EN.jpg",
            productPageLink: "/patch-manager/patch-management.aspx",
            sistemRequirements: {
                cpu: "Pentium 1.5 GHz equivalent or faster (x86, x64, or AMD64 – dual or quad core recommended)",
                datbase: "Patch Manager is compatible with Microsoft SQL Server instances running SQL Server 2005, 2008 (including R2) and 2012 Express, Standard or Enterprise Editions.",
                hardDrive: "10GB free disk space is recommended",
                memory: "2GB or more recommended; 4GB or more recommended if running x64",
                net: "none",
                os: "none"
            },
            tags: "Patching Software, Patching Tools, Automated Patching Software, Agentless Server and Application Monitoring, Server and Application Alerting, Server and Application Reporting"
        },
        /*-----end of product-------*/
        {
            category: "LEM",
            featured: "yes",
            code: "LEM",
            name: "Log & Event Manager",
            subTitle: "Log Management - Collection, Analysis, and Real-Time Event Correlation",
            icon: "icon-lemBk.png",
            bullets: ["Collects log & event data from tens of thousands of devices & performs true real-time correlation", "Powerful Active Response technology enables you to quickly & automatically take action against threats", "Advanced IT Search employs highly effective data visualization tools – word clouds, treemaps, & more", "Quickly generates compliance reports for PCI DSS , GLBA, SOX, NERC CIP, HIPAA, & more", "Out-of-the-box correlation rules, reports, & responses enable speedy deployment in an hour or less"],
            donwloadLink: "/register/index.aspx?Program=1520&c=70150000000PExs",
            demolink: "http://demo.solarwinds.com/flashdemo/lem",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/LEM/Sm/En/0003_LEM_5-4_Cutting-Edge-IT-Search-for-Event-Forensic-Analysis_Sm_EN.jpg",
            productPageLink: "/log-event-manager/log-analysis-event-management.aspx",
            sistemRequirements: {
                cpu: "Dual processor, 3GHz",
                datbase: "none",
                hardDrive: "250 GB",
                memory: "8 GB",
                net: "none",
                os: "none"
            },
            tags: "Log Management, Log and Event Management, Log Event Manager, Log and Event Manager, Windows Event Log Monitor, Event Log Monitoring, Event Log Management, LEM, Security, Security Software, SIEM, Security Information and Event Management, Log Analysis, Event Log Correlation Analysis"
        },
        /*-----end of product-------*/
        {
            category: "SM",
            featured: "no",
            code: "WPM",
            name: " Web Performance Manager",
            subTitle: "Easy, Affordable Website & Web Application Performance Monitoring",
            icon: "icon-wpmBk.png",
            bullets: ["Continuously monitor end-user experience for each step of a Web transaction", "Monitor any Web application whether internal (behind the firewall), external (customer-facing), or cloud-based", "Quickly find the root cause for each Web page performance issue: DNS look-up, connection time, send time, time to first byte, or content download time", "Visualize availability & duration alerts by transaction step, Web page & location", "Enjoy full support for Java®-based applications & rich Web technologies such as AJAX, Flash® & Silverlight®"],
            donwloadLink: "/register/index.aspx?Program=1577&c=70150000000PBDr",
            demolink: "http://systems.demo.solarwinds.com/Orion/SEUM/Summary.aspx/?AccountID=SYSguest&password=orion",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/WPM/Sm/En/0007_WPM_2-0_LUCID-Interface_Sm_EN.jpg",
            productPageLink: "/web-performance-monitor/web-performance-monitoring-software.aspx",
            sistemRequirements: {
                cpu: "Dual processor, 3GHz",
                datbase: "SQL Server® 2005 SP1 Express, Standard, Enterprise SQL Server 2008 Express, Standard, or Enterprise, or SQL Server 2008 R2",
                hardDrive: "20GB",
                memory: "3GB",
                net: "Version 4 or later",
                os: "Windows® 2003 & 2008 Server (32-bit or 64-bit) including R2, with IIS installed, running in 32-bit mode"
            },
            tags: "Web Application Monitoring, Website Monitoring, Monitoring, Web, Application"
        },
        /*-----end of product-------*/
        {
            category: "SM",
            featured: "no",
            code: "DRS",
            name: "DameWare Remote Support",
            subTitle: "Remote Support for Mac OS® X, Linux® & Windows® Computers",
            icon: "icon-drsBk.png",
            bullets: ["Remotely control Windows, Linux & Mac OS X computers", "Start, stop & restart Windows services without having to use remote control", "Access Windows computers from iPhone® or iPad® devices", "Manage users & groups from multiple Active Directory® domains", "Export AD objects & detailed information from remote Windows computers "],
            donwloadLink: "/register/registrationb.aspx?Program=17823&c=70150000000RQlq",
            demolink: "none",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/DRS/Sm/EN/0005_DRS_9-0_Active-Directory-Management_Sm_EN.jpg",
            productPageLink: "none",
            sistemRequirements: {
                cpu: "none",
                datbase: "none",
                hardDrive: "none",
                memory: "none",
                net: "none",
                os: "none"
            },
            tags: "Remote Support Software, Remote Administration Software, IT Administration Software, Active Directory Management Tools, Desktop Remote Control, DameWare, Mini Remote Control, DameWare NT Utilities, DameWare Remote Support, Help Desk"
        },
        /*-----end of product-------*/
        {
            category: "SM",
            featured: "no",
            code: "DMRC",
            name: "DameWare Mini Remote Control",
            subTitle: "Remote Control for Windows® Machines",
            icon: "icon-drsBk.png",
            bullets: ["Remotely control any machine on your LAN or WAN", "Perform remote, on-the-fly deployment of the client agent – no machine reboots required", "Manage all of the machines in your environment with a single, affordable license"],
            donwloadLink: "http://www.dameware.com/products/downloads/registration.aspx?productType=mrc&AppID=17128&CampaignID=70150000000PVUt",
            demolink: "none",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/MRC/Sm/En/0001_MRC_7-0_Seamless-Window_Sm_EN.jpg",
            productPageLink: "http://www.dameware.com/products/mini-remote-control/product-overview.aspx",
            sistemRequirements: {
                cpu: "none",
                datbase: "none",
                hardDrive: "none",
                memory: "none",
                net: "none",
                os: "none"
            },
            tags: "Remote Support Software, Remote Administration Software, IT Administration Software, Active Directory Management Tools, Desktop Remote Control, DameWare, Mini Remote Control, DameWare NT Utilities, DameWare Remote Support, Help Desk"
        },
        /*-----end of poduct-------*/
        {
            category: "LEM",
            featured: "no",
            code: "SUFS",
            name: "Serv-U FTP Server",
            subTitle: "Simple & Secure File Transfer Server for Windows® & Linux®",
            icon: "icon-servuBk.png",
            bullets: ["Upload, download & view files using any Web browser & most mobile devices", "Automate transfers from any platform using existing FTP/S or SFTP (SSH) clients", "Secure partner data exchanges with FIPS 140-2 validated cryptography & DMZ gateways", "Send email or run scripts when files arrive, lockouts occur, or other events fire", "Control & monitor bandwidth, access, quotas & dozens of other attributes"],
            donwloadLink: "http://www.serv-u.com/customer/record.asp",
            demolink: "none",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/rhinosoft/Serv-U/Sm/En/0001_SU_14-0_Management-Console_Sm_EN.jpg",
            productPageLink: "http://www.serv-u.com/",
            sistemRequirements: {
                cpu: "none",
                datbase: "none",
                hardDrive: "none",
                memory: "none",
                net: "none",
                os: "none"
            },
            tags: "FTP, FTP Server, Secure File Transfer, File Transfer, SFTP, FTPS, Web Transfer, Large Files, Attachments, Remote Access, Folder Management, File Management, File Sharing, Ad Hoc, Ad Hoc File Transfer, Secure File Sharing, Share Files, Request Files, Receive Files, Send Files, Managed File Transfer, MFT, Serv-U, Serv-U Corporate, Serv-U Bronze, Serv-U Silver, Serv-U Gold, Serv-U Platinum, Security Software, FTP Software, Mobile File Transfer, Mobile Document, Remote Folders, Remote Files, ServU"
        },
        /*-----end of product-------*/
        {
            category: "NC",
            featured: "no",
            code: "SCEP",
            name: "System Center Extension Pack",
            subTitle: "Quickly monitor more applications in System Center Operations Manager",
            icon: "icon-samBk.png",
            bullets: ["Seamless integration of detailed application performance metrics", "Easy customization of alert actions & thresholds for anything that is monitored", "Native support for more than 150 applications including IBM® DB2, Apache™, Oracle® & more", "Out-of-the box guidance on what to monitor & the optimal thresholds for each application", "Extend Operations Manager visibility in about an hour – no professional services needed!"],
            donwloadLink: "/register/registrationb.aspx?program=17699&c=70150000000Pnwr",
            demolink: "none",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/SAM/Sm/En/0023_SAM_5-0_Enterprise-Level-Scale_Sm_EN.jpg",
            productPageLink: "/lp/system-center-extension-pack.aspx",
            sistemRequirements: {
                cpu: "none",
                datbase: "none",
                hardDrive: "none",
                memory: "none",
                net: "none",
                os: "none"
            },
            tags: "System Center Extension Pack, system, center, extentions, pack"
        },
        /*-----end of product-------*/
        {
            category: "NC",
            featured: "no",
            code: "VAPP",
            name: "Virtualized Application Performance Pack",
            subTitle: "Application Stack Monitoring - App, Virtualization & Storage",
            icon: "icon-vmanBk.png",
            bullets: ["In-context management spanning app, VM, host, cluster & datastore", "Prebuilt Virtualization Manager integration with Server & Application Monitor (SAM) ", "Deep visibility into datastore performance & capacity", "Datastore application dependency views w/ IOPs & latency overlays", "Storage Manager integration to provide application-specific visibility to LUN, RG & Disk"],
            donwloadLink: "/register/index.aspx?Program=17594&c=70150000000PjWz",
            demolink: "none",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/SAM/Sm/En/0019_SAM_5-0_Extensible-Monitoring-for-Custom-Applications-and-Scripts_Sm_EN.jpg",
            productPageLink: "/lp/virtualized-app-performance-pack.aspx",
            sistemRequirements: {
                cpu: "none",
                datbase: "none",
                hardDrive: "none",
                memory: "none",
                net: "none",
                os: "none"
            },
            tags: "Virtualized Application Performance Pack, virtualized, application, performance, pack"

        },
        /*-----end of product-------*/
        {
            category: "NC",
            featured: "no",
            code: "WAMP",
            name: "Web App Monitoring Pack",
            subTitle: "Complete visibility to website & web application issues",
            icon: "icon-wpmBk.png",
            bullets: ["Monitor end-user experience from multiple locations for apps within & outside the firewall", "Alert on transaction abnormalities for each page in the transaction", "Enables firewall change modeling, verification & deployment", "Find the cause of Web page latency issues (DNS lookup, connection & send time, download time, etc.)", "Determine constraints on application resources including Web servers, databases & app servers"],
            donwloadLink: "/register/registrationb.aspx?program=1642&c=70150000000PE2m",
            demolink: "none",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/WPM/Sm/En/0007_WPM_2-0_LUCID-Interface_Sm_EN.jpg",
            productPageLink: "/lp/web-app-monitoring-pack.aspx",
            sistemRequirements: {
                cpu: "none",
                datbase: "none",
                hardDrive: "none",
                memory: "none",
                net: "none",
                os: "none"
            },
            tags: "Web App Monitoring Pack, web, application, monitoring, pack"

        },
        /*-----end of product-------*/
        {
            category: "DP",
            featured: "yes",
            code: "DPASQL",
            name: "Database Performance Analyzer for SQL Server®",
            subTitle: "Resolve SQL Server Performance Problems",
            icon: "icon-dpasqlBk.png",
            bullets: ["Identifies the performance problems most impacting end user response time", "Isolates root cause in just four clicks", "Illustrates historical trends explaining performance over days, months & years", "See a direct correlation between SQL Server response time and VMware resource metrics", "Agentless architecture, install and see results in minutes!"],
            donwloadLink: "/register/registrationb.aspx?Program=18345&c=70150000000Rb10",
            demolink: "http://ignite.demo.solarwinds.com/iwc/login.iwc",
            imageLink: "http://web.swcdn.net/creative/images/screenshots/products/DPA/Sm/En/Ignite-for-SQL-1_sm.jpg",
            productPageLink: "/Database-Performance-Analyzer-SQL-Server.aspx",
            sistemRequirements: {
                cpu: "Dual Core",
                datbase: "Database Performance Analyzer for SQL Server repository can be either SQL Server( 2000 SP3 or higher (2000, 2005, 2008, 2012) or Oracle (10g or higher).",
                hardDrive: "2 Gb per monitored instance on repository database.",
                memory: "4GB",
                net: "none",
                os: "Windows®, Linux® or UNIX® supporting Java JRE 1.5 or higher."
            },
            tags: "Database Performance, SQL Server Performance, SQL Server Performance Tuning, SQL Server Wait Type Analysis, SQL Server Extended Events, SQL Server on VMware,  SQL Performance,   SQL Server Monitoring, SQL Server Monitor, SQL Optimization, SQL Server 2012 performance, SQL Server 2008 performance, Ignite"
        },
        /*-----end of product-------*/
        {
            category: "DP",
            featured: "no",
            code: "DPAO",
            name: "Database Performance Analyzer for Oracle",
            subTitle: "Resolve Oracle Performance Problems",
            icon: "icon-dpaoBk.png",
            bullets: ["Identifies the performance problems most impacting end user response time.", " Isolates root cause in just four clicks. ", " Illustrates historical trends explaining performance over days, months & years. ", " Provides contextual visibility to how VMware performance impacts the database. ", " Agentless architecture with no dependence on Oracle Packs, installs in minutes.  "],
            donwloadLink: "/register/registrationb.aspx?Program=18346&c=70150000000Rb0v",
            demolink: "http://ignite.demo.solarwinds.com/iwc/login.iwc",
            imageLink: "http://web.swcdn.net/creative/images/products/DPA/Ignite-for-Oracle1-320x170.png",
            productPageLink: "/Database-Performance-Analyzer-Oracle.aspx",
            sistemRequirements: {
                cpu: "Dual Core",
                datbase: "Database Performance Analyzer for Oracle’s repository can be either SQL Server( 2000 SP3 or higher (2000, 2005, 2008, 2012) or Oracle (10g or higher).",
                hardDrive: "2 Gb per monitored instance on repository database.",
                memory: "4GB",
                net: "none",
                os: "Windows®, Linux® or UNIX® supporting Java JRE 1.5 or higher."
            },
            tags: "Database Performance, Oracle Performance, Oracle Performance Tuning, Oracle Wait Event Analysis, Oracle SE performance, Oracle Standard Edition Performance, Oracle RAC Performance,  SQL Performance, Oracle  Monitoring, Oracle Monitor, SQL Optimization, Oracle 10g performance, Oracle 11g performance, Ignite"
        },
        /*-----end of product-------*/
        {
            category: "DP",
            featured: "no",
            code: "DPADB2",
            name: "Database Performance Analyzer for DB2®",
            subTitle: "Resolve DB2 Performance Problems",
            icon: "icon-dpadBk.png",
            bullets: ["Identifies the performance problems most impacting end user response time", "Isolates root cause in just four clicks", "Illustrates historical trends explaining performance over days, months & years", "Installs in minutes for immediate and actionable results", "Agentless architecture with no load and nothing installed on monitored servers"],
            donwloadLink: "/register/registrationb.aspx?Program=18343&c=70150000000Rb0q",
            demolink: "none",
            imageLink: "http://web.swcdn.net/creative/images/screenshots/products/DPA/Sm/EN/Ignite-for-DB2-1_Sm_EN.jpg",
            productPageLink: "/Database-Performance-Analyzer-DB2.aspx",
            sistemRequirements: {
                cpu: "Dual Core",
                datbase: "Database Performance Analyzer for DB2’s repository can be either SQL Server( 2000 SP3 or higher (2000, 2005, 2008, 2012) or Oracle (10g or higher).",
                hardDrive: "2 Gb per monitored instance on repository database.",
                memory: "4GB",
                net: "none",
                os: "Windows®, Linux® or UNIX® supporting Java JRE 1.5 or higher."
            },
            tags: "Database Performance, DB2 Performance, DB2 Performance Tuning, SQL Performance, Database locking, DB2 Monitoring, DB2 Monitor, SQL Optimization, DB2 LUW performance, DB2 UDB Performance, Ignite"
        },
        /*-----end of product-------*/
        {
            category: "DP",
            featured: "no",
            code: "DPASYB",
            name: "Database Performance Analyzer for Sybase",
            subTitle: "Resolve Sybase ASE Performance Problems",
            icon: "icon-dpasBk.png",
            bullets: ["Identifies the performance problems most impacting end user response time.", "Isolates root cause in just four clicks.", "Illustrates historical trends explaining performance over days, months & years.", "See a direct correlation between Sybase response time and VMware resource metrics.", "Agentless architecture, install and see results in minutes!."],
            donwloadLink: "/register/registrationb.aspx?Program=18344&c=70150000000Rb15",
            demolink: "none",
            imageLink: "http://web.swcdn.net/creative/images/products/DPA/Ignite-for-Sybase1-320x170.jpg",
            productPageLink: "/Database-Performance-Analyzer-Sybase.aspx",
            sistemRequirements: {
                cpu: "Dual Core",
                datbase: "Database Performance Analyzer for Sybase repository can be either SQL Server( 2000 SP3 or higher (2000, 2005, 2008, 2012) or Oracle (10g or higher).",
                hardDrive: "2 Gb per monitored instance on repository database.",
                memory: "4GB",
                net: "none",
                os: "Windows®, Linux® or UNIX® supporting Java JRE 1.5 or higher."
            },
            tags: "Database Performance, Sybase Performance, Sybase Performance Tuning, SQL Performance, Sybase  Monitoring, Sybase Monitor, SQL Optimization, Sybase ASE Performance, Ignite"
        },
        /*-----end of product-------*/
        /*   FREE TOOLS SECTION  */
        {
            code: "TFPT",
            category: "FreeTool",
            subcategory: "NM",
            name: "TFTP Server & SFTP/SCP Server",
            subTitle: "Transfer Executable Images & Configs with Ease",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=52&c=70150000000CcH2",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0019_FT-TFTP_Server_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "IPAT",
            category: "FreeTool",
            subcategory: "NM",
            name: "IP Address Tracker",
            subTitle: "Scans, Tracks, & Consolidates IP Address Information",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=912&c=70150000000Ehqn",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0013_FT-IP-Address-Tracker_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "RTBM",
            category: "FreeTool",
            subcategory: "NM",
            name: "Real-Time Bandwidth Monitor",
            subTitle: "Monitors Bandwidth Usage in Real-time",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/registrationb.aspx?program=1643&c=70150000000PDzJ",
            imageLink: "http://web.swcdn.net/v7.4/creative/images/screenshots/freeTools/0020_FT-Real-Time-Bandwidth-Monitor_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "RTNA",
            category: "FreeTool",
            subcategory: "NM",
            name: "Real-time NetFlow Analyzer",
            subTitle: "Analyzes Network Traffic",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=852&c=70150000000DrSQ",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0015_FT-Real-time-NetFlow-Analyzer_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "NDM",
            category: "FreeTool",
            subcategory: "NM",
            name: "Network Device Monitor",
            subTitle: "Monitors Any Statistic on Any Network Device",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=991&c=70150000000OaIF",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0011_FT-Network-Device-Monitor_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "CDRT",
            category: "FreeTool",
            subcategory: "NM",
            name: "Call Detail Record Tracker",
            subTitle: "Monitor VoIP Call Performance",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=17167&c=70150000000PWpP",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0028_FT-Call-Detail-Record-Tracker_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "NCG",
            category: "FreeTool",
            subcategory: "NM",
            name: "Network Config Generator",
            subTitle: "Quickly Configures Network Devices",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=968&c=70150000000FRws",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0012_FT-Network-Config-Generator_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "IPSLA",
            category: "FreeTool",
            subcategory: "NM",
            name: "IP SLA Monitor",
            subTitle: "Harness Cisco IP SLA to Analyze Performance Between Sites",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=896&c=70150000000EQ0I",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0017_FT-IP-SLA-Monitor_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "SC",
            category: "FreeTool",
            subcategory: "NM",
            name: "Subnet Calculator",
            subTitle: "Four Free IP Management Tools in One Download",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=92&c=70150000000CcHV",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0014_FT-Subnet-Calculator_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "WOL",
            category: "FreeTool",
            subcategory: "NM",
            name: "Wake-on-LAN",
            subTitle: "Remotely Power Up PCs",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=214&c=70150000000CcH1",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0018_FT-Wake-on-LAN_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "NFC",
            category: "FreeTool",
            name: "NetFlow Configurator",
            subcategory: "NM",
            subTitle: "Monitors Inbound & Outbound Traffic Data",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=523&c=70150000000DGod",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0016_FT-NetFlow-Configurator_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "FMM",
            category: "FreeTool",
            subcategory: "NM",
            name: "Free Mobile Monitor for SolarWinds NPM or SAM",
            subTitle: "Manage NPM or SAM, plus access SSH, telnet, and RDP from your mobile device",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "http://downloads.solarwinds.com/solarwinds/Release/FreeTool/ZP1/ZP-FMM-Info/ZP-FMM-INFO-DI.html",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/products/MM/Sm/En/0001_FT-Mobile-Monitor_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "AC",
            category: "FreeTool",
            subcategory: "NM",
            name: "Alert Central",
            subTitle: "FREE Alert Management, Escalation, and On-Call Scheduling",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/alertcentral/alertcentraldownload.aspx",
            imageLink: "http://web.swcdn.net/creative/images/screenshots/freeTools/0030_FT-Alert-Central_sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "FB",
            category: "FreeTool",
            subcategory: "NM",
            name: "Firewall Browser",
            subTitle: "Simplify Firewall Rule Change Requests and Troubleshooting",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/alertcentral/alertcentraldownload.aspx",
            imageLink: "http://web.swcdn.net/creative/images/screenshots/freeTools/0030_FT-Alert-Central_sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "FTP",
            category: "FreeTool",
            subcategory: "NM",
            name: "FTP Voyager Free FTP Client for Windows®",
            subTitle: "Secure file transfer, which includes automation, scheduling, and sync utilities",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "http://www.serv-u.com/ftpvoyager/free-download.asp",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/products/Free-tools/FTP-Voyager/downloadindex.jpg",
        },
        /*end of freetool*/
        {
            code: "IUAT",
            category: "FreeTool",
            subcategory: "SM",
            name: "Inactive User Account Removal Tool",
            subTitle: "Scan Active Directory & Easily Remove Users",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=1800&c=70150000000PH8s",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0007_FT-Inactive-User-Account-Removal-Tool_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "ICART",
            category: "FreeTool",
            subcategory: "SM",
            name: "Inactive Computer Account Removal Tool",
            subTitle: "Scan Active Directory & Easily Remove Computers",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=1800&c=70150000000PH8s",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0008_FT-Inactive-Computer-Account-Removal-Tool_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "UIT",
            category: "FreeTool",
            subcategory: "SM",
            name: "User Import Tool",
            subTitle: "Quickly Create Users in Bulk & Specify Attributes",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=1800&c=70150000000PH8s",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0009_FT-User-Import-Tool_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "DTWA",
            category: "FreeTool",
            subcategory: "SM",
            name: "Diagnostic Tool for the WSUS Agent",
            subTitle: "Easily check configuration files and associated values and test WSUS resource connections",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "http://downloads.solarwinds.com/solarwinds/Release/FreeTool/ZP1/WSUS-ZP-PM3/WSUS-MoreMoreSoftware.html",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0001_FT-WSUS-Agent_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "WTW",
            category: "FreeTool",
            subcategory: "SM",
            name: "Web Transaction Watcher",
            subTitle: "Records and Monitors any Multi-step Web Transaction",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=1579&c=70150000000PBhD",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0002_FT-Web-Transaction-Watcher_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "WMI",
            category: "FreeTool",
            subcategory: "SM",
            name: "WMI Monitor",
            subTitle: "Monitors Windows Applications & Servers",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=937&c=70150000000Ezdb",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0006_FT-WMI-Monitor_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "PAAD",
            category: "FreeTool",
            subcategory: "SM",
            name: "Permissions Analyzer for Active Directory",
            subTitle: "Delivers Visibility Into Effective Permissions",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=1323&c=70150000000OzCs",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0005_FT-Permissions-Analyzer-for-Active-Directory_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "EM",
            category: "FreeTool",
            subcategory: "SM",
            name: "Exchange Monitor",
            subTitle: "Monitors Exchange Server's Health in Real Time",
            donwloadLink: "/register/index.aspx?Program=825&c=70150000000Djc6",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0010_FT-Exchange-Monitor_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "RTAA",
            category: "FreeTool",
            subcategory: "SM",
            name: "Real-Time AppFlow Analyzer",
            subTitle: "Shows What Types of Traffic Are on Your Network",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=1421&c=70150000000Mq6X",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0003_FT-Real-Time-AppFlow-Analyzer_Sm_EN.jpg",
        },

        /*end of freetool*/

        {
            code: "SNMP",
            category: "FreeTool",
            subcategory: "SM",
            name: "SNMP Enabler for Windows",
            subTitle: "Remotely Installs, Enables, & Configures SNMP on Multiple Windows Machines",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=1382&c=70150000000P2cK",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0004_FT-SNMP-Enabler-for-Windows_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "KSS",
            category: "FreeTool",
            subcategory: "SM",
            name: "Kiwi Syslog Server",
            subTitle: "Collect, view and archive syslog messages and SNMP traps",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "http://www.kiwisyslog.com/free-edition.aspx?productType=ks&AppID=876&CampaignID=70150000000Es8J",
            imageLink: "http://web.swcdn.net/creative/images/products/Free-tools/kiwi-syslog/free-tool-thumb.png",
        },
        /*end of freetool*/
        {
            code: "VMM",
            category: "FreeTool",
            subcategory: "NC",
            name: "VM Monitor",
            subTitle: "Monitors the Performance of VMware & Hyper-V Hosts",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=864&c=70150000000E3pU",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0025_FT-VM-Monitor_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "VMCC",
            category: "FreeTool",
            subcategory: "NC",
            name: "VM-to-Cloud Calculator",
            subTitle: "Discovers Virtual Machines & Estimates the Cost to Move to the Cloud",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=1521&c=70150000000PANv",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0023_FT-VM-to-Cloud-Calculator_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "VMC",
            category: "FreeTool",
            subcategory: "NC",
            name: "VM Console",
            subTitle: "Bounces VMs & Tracks Their Status from Your Desktop",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=1320&c=70150000000OzCi",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0024_FT-VM-Console_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "CPMPC",
            category: "FreeTool",
            subcategory: "NC",
            name: "Cloud Performance Monitor Powered by CopperEgg",
            subTitle: "Monitor Cloud-based Servers with Ease",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=12119&c=70150000000PUtx",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0027_FT-Cloud-Performance-Monitor_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "SRTM",
            category: "FreeTool",
            subcategory: "NC",
            name: "Storage Response Time Monitor",
            subTitle: "Identifies VMs With High Storage Latency",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=1645&c=70150000000PEMX",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0022_FT-Storage-Response-Time-Monitor_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "SANM",
            category: "FreeTool",
            name: "SAN Monitor",
            subcategory: "NC",
            subTitle: "Monitors Your Storage Array",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=997&c=70150000000OhZs",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0021_FT-SAN-Monitor_Sm_EN.jpg",
        },
        /*end of freetool*/
        {
            code: "ELC",
            category: "FreeTool",
            subcategory: "LEM",
            name: "Event Log Consolidator",
            subTitle: "Consolidates Event Logs from up to 5 Servers",
            icon: "icon-freetoolsBk.png",
            donwloadLink: "/register/index.aspx?Program=1857&c=70150000000PIFp",
            imageLink: "http://web.swcdn.net/v7.1/creative/images/screenshots/freeTools/0026_FT-Event-Log-Consolidator_Sm_EN.jpg",
        }
        /*end of freetool*/
    ];
	
	//Adding Category or Sub Categorie to search repeat
	$scope.categoryClassSearch = function(product) {
		if(product.category == "FreeTool"){
			return product.subcategory;
		}else{
			return product.category;
		};
	};
    //Category Selection Default
    $scope.selectCategory = 'all';
}); //end of app


//Tabs Function jquery
$(function() {
    $("ul.d_tabs > li").click(function() {
        $("ul.d_tabs > li").removeClass("d_selected");
        var elDiv = $(this).attr('class');
        $(this).addClass("d_selected");
        $(".d_tabContent > li").fadeOut("fast", function() {
            $("#" + elDiv).fadeIn("fast");
        });

    });
});
