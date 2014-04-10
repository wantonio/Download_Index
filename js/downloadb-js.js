angular.module('downloadIndex', ['ngAnimate'], function() {}).controller('downloadListCtrl', function($scope) {
    $scope.productCat = [{
        category: "NM",
        order: "A",
        featured: "yes",
        code: "NPM",
        name: "Network Performance Monitor",
        subTitle: "Powerful Network Fault & Availability Management",
        icon: "icon-npmBk.png",
        iconhover: "icon-npmOr.png",
        donwloadLink: "/register/index.aspx?Program=607&c=70150000000Dlbw",
        demolink: "http://oriondemo.solarwinds.com/Orion/SummaryView.aspx?ViewKey=NPM%20Summary&AccountID=guest&password=orion",
        productPageLink: "/network-performance-monitor/network-monitoring.aspx",
        tags: "Network Monitoring Software, Network Performance Monitor, Networking Management, Networking Software, NPM, Network Device Mapping Topology Diagrams, Orion, Orion platform"
    }, /*----------END OF PRODUCT----------*/ {
        category: "NM",
        order: "A",
        featured: "no",
        code: "IPAM",
        name: "IP Address Manager",
        subTitle: "Centralized IP Address Management, Monitoring, Alerting, and Reporting",
        icon: "icon-ipamBk.png",
        donwloadLink: "/register/index.aspx?Program=911&c=70150000000Eehi",
        demolink: "http://configuration.demo.solarwinds.com/Orion/IPAM/IPAMSummaryView.aspx/?AccountID=CONFguest&password=orion",
        productPageLink: "/ip-address-manager/ip-address-management.aspx",
        tag: "IP Address Manager, IP Address Software, IP Address Monitoring, IP Address Management Tool, IPAM Solutions, IPAM Software, IPAM, IP Address Conflict Detection, DNS management, DHCP management, Subnet Scan, Subnet allocation, IP Address history, DHCP scope utilization., IP Address Tracking"
    }, /*----------END OF PRODUCT----------*/ {
        category: "NM",
        order: "A",
        featured: "no",
        code: "NTA",
        name: "NetFlow Traffic Analyzer",
        subTitle: "Real Time Network Utilization & Bandwidth Monitoring",
        icon: "icon-ntaBk.png",
        donwloadLink: "/register/index.aspx?Program=815&c=70150000000CgeI",
        demolink: "http://oriondemo.solarwinds.com/Orion/TrafficAnalysis/SummaryView.aspx/?AccountID=Guest&password=orion",
        productPageLink: "/netflow-traffic-analyzer/network-traffic-analysis.aspx",
        tags: "Netflow Analyzer, Netflow Traffic Analyzer, Netflow Data, Netflow Reporting, Netflow Traffic Analysis, Netflow Monitoring Software, NTA, Network Bandwidth Monitoring Management, Network Traffic Monitoring Management, Orion, Orion platform"
    }, /*----------END OF PRODUCT----------*/ {
        category: "NM",
        order: "A",
        featured: "no",
        code: "NBAP",
        name: "Network Bandwidth Analyzer Pack",
        subTitle: "Comprehensive Network Bandwidth Analysis & Performance Monitoring",
        icon: "icon-npmBk.png",
        donwloadLink: "/register/index.aspx?program=856&c=70150000000PahF",
        demolink: "http://oriondemo.solarwinds.com/Orion/Login.aspx?sessionTimeout=yes&ReturnUrl=%2fOrion%2fTrafficAnalysis%2fSummaryView.aspx",
        productPageLink: "/lp/network-bandwidth-analyzer-pack.aspx",
        tags: "Network Bandwidth Analyzer Pack, network, bandwidth, analyzer, pack"
    }, /*----------END OF PRODUCT----------*/ {
        category: "NM",
        order: "A",
        featured: "no",
        code: "VOIP",
        name: "VoIP & Network Quality Manager",
        subTitle: "Proactive VoIP & WAN Performance Monitoring & Troubleshooting",
        icon: "icon-voipBk.png",
        donwloadLink: "/register/index.aspx?Program=945&c=70150000000PW2r",
        demolink: "http://oriondemo.solarwinds.com/Orion/Voip/Summary.aspx?Tab=IpSla&AccountID=Guest&password=orion",
        productPageLink: "/voip-network-quality-manager/voip-wan-qos-management.aspx",
        tags: "VoIP Monitoring, VoIP Troubleshooting, VoIP and WAN Performance Monitoring, VoIP and WAN Monitoring Software, WAN Performance Monitoring, WAN Performance Software, VNQM, Call troubleshooting, Conference Call Troubleshooting, Call Signaling, Call Quality Monitoring, Trunk Utilization, Orion, Orion platform"
    }, /*----------END OF PRODUCT----------*/ {
        category: "NM",
        order: "A",
        featured: "no",
        code: "UDT",
        name: "User Device Tracker",
        subTitle: "Automated Device Tracking & Switch Port Management",
        icon: "icon-udtBk.png",
        donwloadLink: "/register/index.aspx?Program=1419&c=70150000000P5KS",
        demolink: "http://oriondemo.solarwinds.com/Orion/UDT/Summary.aspx/?AccountID=Guest&password=orion",
        productPageLink: "/user-device-tracker/switch-port-monitoring-mapping.aspx",
        tags: "User Device Tracking Software, Switch Port Management, Switch Monitoring, Whitelist, Port Shutdown, Watchlist, MAC Address, UDT, Orion, Orion platform"
    }, /*----------END OF PRODUCT----------*/ {
        category: "NM",
        order: "A",
        featured: "no",
        code: "IPCB",
        name: "IP Control Bundle",
        subTitle: "Integrated IP Space Management & Endpoint Tracking",
        icon: "icon-ipamBk.png",
        donwloadLink: "/register/registrationb.aspx?program=17287&c=70150000000PaQ9",
        demolink: "none",
        productPageLink: "none",
        tags: "IP Control Bundle, ip, control, bundle"
    }, /*----------END OF PRODUCT----------*/ {
        category: "NM",
        order: "A",
        featured: "no",
        code: "NCM",
        name: "Network Configuration Manager",
        subTitle: "Automated Network Configuration & Change Management",
        icon: "icon-ncmBk.png",
        donwloadLink: "/register/index.aspx?Program=617&c=70150000000E1Ii",
        demolink: "http://oriondemo.solarwinds.com/Orion/NCM/Summary.aspx/?AccountID=Guest&password=orion",
        productPageLink: "/network-configuration-manager/network-configuration-change-management.aspx",
        tags: "Network Configuration Management, Configuration Backup, Change Detection, Policy Compliance, Inventory, Bulk Change, End of Life, NCM, Cirrus, Orion, Orion platform"
    }, /*----------END OF PRODUCT----------*/ {
        category: "LEM",
        order: "C",
        featured: "no",
        code: "FSM",
        name: "Firewall Security Manager",
        subTitle: "Multi-vendor Firewall Security & Change Management",
        icon: "icon-fsmBk.png",
        donwloadLink: "/register/index.aspx?Program=17188&c=70150000000PX9P",
        demolink: "http://demo.solarwinds.com/flashdemo/fsm/",
        productPageLink: "/firewall-security-manager/firewall-management.aspx",
        tags: "Firewall Security, Security Management Software, Firewall Security Management, Firewall Security Software, Firewall Change Management, Security Automation, FSM"
    }, /*----------END OF PRODUCT----------*/ {
        category: "NM",
        order: "A",
        featured: "no",
        code: "ET",
        name: "Engineer’s Toolset",
        subTitle: "Over 50 Must-Have Network Tools",
        icon: "icon-toolSetBk.png",
        donwloadLink: "/register/index.aspx?Program=428&c=70150000000D8FL",
        demolink: "none",
        productPageLink: "/engineers-toolset/network-troubleshooting.aspx",
        tags: "Network Diagnostic Tools, Networking Tools, Network Tools, Monitoring, Monitoring Tools, Monitoring Software, Cisco Management Tools, Network Discovery Tools"
    }, /*----------END OF PRODUCT----------*/ {
        category: "NM",
        order: "A",
        featured: "no",
        code: "NTM",
        name: "Network Topology Mapper",
        subTitle: "Map Your Network Automatically in Just Minutes",
        icon: "icon-ntmBk.png",
        donwloadLink: "/register/index.aspx?Program=17592&c=70150000000PjNE",
        demolink: "none",
        productPageLink: "/network-topology-mapper/network-mapping-software.aspx",
        tags: "Network Mapping Software, Network Mapping Tools, Network Topology Software, Network Topology Tools, NTM"
    }, /*----------END OF PRODUCT----------*/ {
        category: "SM",
        order: "B",
        featured: "no",
        code: "WHD",
        name: "Web Help Desk",
        subTitle: "Web-based IT Help Desk and Asset Management",
        icon: "icon-whdBk.png",
        donwloadLink: "/register/index.aspx?program=12124&c=70150000000PVZ5",
        demolink: "http://webhelpdesk.demo.solarwinds.com/helpdesk/WebObjects/Helpdesk.woa/wa/login?username=admin&password=admin",
        productPageLink: "/solutions/it-help-desk.aspx",
        tags: "Web Help Desk Software, IT Administration Software, Help Desk, ITSM, ITIL, Asset Management, Service Desk"
    }, /*----------END OF PRODUCT----------*/ {
        category: "SM",
        order: "B",
        featured: "no",
        code: "MA",
        name: "Mobile Admin",
        subTitle: "Mobile IT monitoring & management for after-hours support",
        icon: "icon-mobileBk.png",
        donwloadLink: "/register/index.aspx?program=12031&c=70150000000PQHD",
        demolink: "http://demo.solarwinds.com/flashdemo/ma/",
        productPageLink: "/solutions/mobile-IT-administration-app.aspx",
        tags: "IT Administration Software, IT Administration Application, Mobile IT Monitoring and Management, Mobile Administration Software, SolarWinds Mobile, NPM Mobile, SAM Mobile, Orion Mobile, Mobile, VMware, Active Directory, Exchange, Backup"
    }, /*----------END OF PRODUCT----------*/ {
        category: "NM",
        order: "A",
        featured: "no",
        code: "NGB",
        name: "Network Guardian Bundle",
        subTitle: "Automated Firewall Change Management & Policy Compliance",
        icon: "icon-fsmBk.png",
        donwloadLink: "/register/registrationb.aspx?program=17528&c=70150000000PdY6",
        demolink: "none",
        productPageLink: "/lp/network-guardian-bundle.aspx",
        tags: "Network Gardian Bundle, Network, Gardian, Bundle"
    }, /*----------END OF PRODUCT----------*/ {
        category: "SM",
        order: "B",
        featured: "yes",
        code: "SAM",
        name: "Server & Application Monitor",
        subTitle: "Server Monitoring Made Simple – Deploy, Monitor & Resolve",
        icon: "icon-samBk.png",
        donwloadLink: "/register/index.aspx?Program=857&c=70150000000Dtb9",
        demolink: "http://systems.demo.solarwinds.com/Orion/Apm/Summary.aspx/?AccountID=SYSguest&password=orion",
        productPageLink: "/server-application-monitor/server-application-monitoring.aspx",
        tags: "Server Monitoring, Server Monitoring Software, Server Monitor, Application Monitoring, Application Monitoring Software, Server and Application Monitoring, Server and Application Monitor, SAM, Windows Event Log, SQL Server Performance, SQL Server Monitoring, SQL monitoring, Microsoft Active Directory Performance Monitoring Management, Microsoft Windows Server Monitoring Management, Microsoft SQL Server Performance, Microsoft SQL Server Monitoring, Orion, Orion platform"
    }, /*----------END OF PRODUCT----------*/ {
        category: "SM",
        order: "B",
        featured: "no",
        code: "VM",
        name: "Virtualization Manager",
        subTitle: "Comprehensive Virtualization Management – From VM to Spindle",
        icon: "icon-vmanBk.png",
        donwloadLink: "/register/index.aspx?Program=1461&c=70150000000P84F",
        demolink: "http://virtualization.demo.solarwinds.com/",
        productPageLink: "/virtualization-manager/virtualization-management.aspx",
        tags: "Virtualization Management, Virtualization Management Software, Performance Monitoring and Management, VMware vSphere Performance Monitoring Management"
    }, /*----------END OF PRODUCT----------*/ {
        category: "SM",
        order: "B",
        featured: "no",
        code: "SM",
        name: "Storage Manager, Powered by Profiler",
        subTitle: "Multi-Vendor Storage Performance & Capacity Management",
        icon: "icon-smBk.png",
        donwloadLink: "/register/index.aspx?Program=1457&c=70150000000P83v",
        demolink: "http://storage.demo.solarwinds.com/",
        productPageLink: "/storage-manager/data-storage-management.aspx",
        tags: "Storage Performance Management, Storage Capacity Management, Storage Performance and Capacity Management Software"
    }, /*----------END OF PRODUCT----------*/ {
        category: "SM",
        order: "B",
        featured: "no",
        code: "PM",
        name: "Patch Manager",
        subTitle: "Automated Patching of Microsoft® & 3rd-Party Apps",
        icon: "icon-pmBk.png",
        donwloadLink: "/register/index.aspx?program=1946&c=70150000000PKvC",
        demolink: "http://systems.demo.solarwinds.com/Orion/PM/Summary.aspx/?AccountID=SYSguest&password=orion",
        productPageLink: "/patch-manager/patch-management.aspx",
        tags: "Patching Software, Patching Tools, Automated Patching Software, Agentless Server and Application Monitoring, Server and Application Alerting, Server and Application Reporting"
    }, /*----------END OF PRODUCT----------*/ {
        category: "LEM",
        order: "C",
        featured: "yes",
        code: "LEM",
        name: "Log & Event Manager",
        subTitle: "Log Management - Collection, Analysis, and Real-Time Event Correlation",
        icon: "icon-lemBk.png",
        donwloadLink: "/register/index.aspx?Program=1520&c=70150000000PExs",
        demolink: "http://demo.solarwinds.com/flashdemo/lem",
        productPageLink: "/log-event-manager/log-analysis-event-management.aspx",
        tags: "Log Management, Log and Event Management, Log Event Manager, Log and Event Manager, Windows Event Log Monitor, Event Log Monitoring, Event Log Management, LEM, Security, Security Software, SIEM, Security Information and Event Management, Log Analysis, Event Log Correlation Analysis"
    }, /*----------END OF PRODUCT----------*/ {
        category: "SM",
        order: "B",
        featured: "no",
        code: "WPM",
        name: " Web Performance Manager",
        subTitle: "Easy, Affordable Website & Web Application Performance Monitoring",
        icon: "icon-wpmBk.png",
        donwloadLink: "/register/index.aspx?Program=1577&c=70150000000PBDr",
        demolink: "http://systems.demo.solarwinds.com/Orion/SEUM/Summary.aspx/?AccountID=SYSguest&password=orion",
        productPageLink: "/web-performance-monitor/web-performance-monitoring-software.aspx",
        tags: "Web Application Monitoring, Website Monitoring, Monitoring, Web, Application"
    }, /*----------END OF PRODUCT----------*/ {
        category: "SM",
        order: "B",
        featured: "no",
        code: "DRS",
        name: "DameWare Remote Support",
        subTitle: "Remote Support for Mac OS® X, Linux® & Windows® Computers",
        icon: "icon-drsBk.png",
        donwloadLink: "/register/registrationb.aspx?Program=17823&c=70150000000RQlq",
        demolink: "none",
        productPageLink: "none",
        tags: "Remote Support Software, Remote Administration Software, IT Administration Software, Active Directory Management Tools, Desktop Remote Control, DameWare, Mini Remote Control, DameWare NT Utilities, DameWare Remote Support, Help Desk"
    }, /*----------END OF PRODUCT----------*/ {
        category: "SM",
        order: "B",
        featured: "no",
        code: "DMRC",
        name: "DameWare Mini Remote Control",
        subTitle: "Remote Control for Windows® Machines",
        icon: "icon-drsBk.png",
        donwloadLink: "http://www.dameware.com/products/downloads/registration.aspx?productType=mrc&AppID=17128&CampaignID=70150000000PVUt",
        demolink: "none",
        productPageLink: "http://www.dameware.com/products/mini-remote-control/product-overview.aspx",
        tags: "Remote Support Software, Remote Administration Software, IT Administration Software, Active Directory Management Tools, Desktop Remote Control, DameWare, Mini Remote Control, DameWare NT Utilities, DameWare Remote Support, Help Desk"
    }, /*-----end of poduct-------*/ {
        category: "LEM",
        order: "C",
        featured: "no",
        code: "SUFS",
        name: "Serv-U FTP Server",
        subTitle: "Simple & Secure File Transfer Server for Windows® & Linux®",
        icon: "icon-servuBk.png",
        donwloadLink: "http://www.serv-u.com/customer/record.asp",
        demolink: "none",
        productPageLink: "http://www.serv-u.com/",
        tags: "FTP, FTP Server, Secure File Transfer, File Transfer, SFTP, FTPS, Web Transfer, Large Files, Attachments, Remote Access, Folder Management, File Management, File Sharing, Ad Hoc, Ad Hoc File Transfer, Secure File Sharing, Share Files, Request Files, Receive Files, Send Files, Managed File Transfer, MFT, Serv-U, Serv-U Corporate, Serv-U Bronze, Serv-U Silver, Serv-U Gold, Serv-U Platinum, Security Software, FTP Software, Mobile File Transfer, Mobile Document, Remote Folders, Remote Files, ServU"
    }, /*----------END OF PRODUCT----------*/ {
        category: "SM",
        order: "B",
        featured: "no",
        code: "SCEP",
        name: "System Center Extension Pack",
        subTitle: "Quickly monitor more applications in System Center Operations Manager",
        icon: "icon-samBk.png",
        donwloadLink: "/register/registrationb.aspx?program=17699&c=70150000000Pnwr",
        demolink: "none",
        productPageLink: "/lp/system-center-extension-pack.aspx",
        tags: "System Center Extension Pack, system, center, extentions, pack"
    }, /*----------END OF PRODUCT----------*/ {
        category: "SM",
         order: "B",
        featured: "no",
        code: "VAPP",
        name: "Virtualized Application Performance Pack",
        subTitle: "Application Stack Monitoring - App, Virtualization & Storage",
        icon: "icon-vmanBk.png",
        donwloadLink: "/register/index.aspx?Program=17594&c=70150000000PjWz",
        demolink: "none",
        productPageLink: "/lp/virtualized-app-performance-pack.aspx",
        tags: "Virtualized Application Performance Pack, virtualized, application, performance, pack"
    }, /*----------END OF PRODUCT----------*/ {
        category: "SM",
         order: "B",
        featured: "no",
        code: "WAMP",
        name: "Web App Monitoring Pack",
        subTitle: "Complete visibility to website & web application issues",
        icon: "icon-wpmBk.png",
        donwloadLink: "/register/registrationb.aspx?program=1642&c=70150000000PE2m",
        demolink: "none",
        productPageLink: "/lp/web-app-monitoring-pack.aspx",
        tags: "Web App Monitoring Pack, web, application, monitoring, pack"
    }, /*----------END OF PRODUCT----------*/ {
        category: "DP",
        order: "D",
        featured: "yes",
        code: "DPASQL",
        name: "Database Performance Analyzer for SQL Server®",
        subTitle: "Resolve SQL Server Performance Problems",
        icon: "icon-dpasqlBk.png",
        donwloadLink: "/register/registrationb.aspx?Program=18345&c=70150000000Rb10",
        demolink: "http://ignite.demo.solarwinds.com/iwc/login.iwc",
        productPageLink: "/Database-Performance-Analyzer-SQL-Server.aspx",
        tags: "Database Performance, SQL Server Performance, SQL Server Performance Tuning, SQL Server Wait Type Analysis, SQL Server Extended Events, SQL Server on VMware,  SQL Performance,   SQL Server Monitoring, SQL Server Monitor, SQL Optimization, SQL Server 2012 performance, SQL Server 2008 performance, Ignite"
    }, /*----------END OF PRODUCT----------*/ {
        category: "DP",
        order: "D",
        featured: "no",
        code: "DPAO",
        name: "Database Performance Analyzer for Oracle®",
        subTitle: "Resolve Oracle Performance Problems",
        icon: "icon-dpaoBk.png",
        donwloadLink: "/register/registrationb.aspx?Program=18346&c=70150000000Rb0v",
        demolink: "http://ignite.demo.solarwinds.com/iwc/login.iwc",
        productPageLink: "/Database-Performance-Analyzer-Oracle.aspx",
        tags: "Database Performance, Oracle Performance, Oracle Performance Tuning, Oracle Wait Event Analysis, Oracle SE performance, Oracle Standard Edition Performance, Oracle RAC Performance,  SQL Performance, Oracle  Monitoring, Oracle Monitor, SQL Optimization, Oracle 10g performance, Oracle 11g performance, Ignite"
    }, /*----------END OF PRODUCT----------*/ {
        category: "DP",
        order: "D",
        featured: "no",
        code: "DPADB2",
        name: "Database Performance Analyzer for DB2®",
        subTitle: "Resolve DB2 Performance Problems",
        icon: "icon-dpadBk.png",
        donwloadLink: "/register/registrationb.aspx?Program=18343&c=70150000000Rb0q",
        demolink: "none",
        productPageLink: "/Database-Performance-Analyzer-DB2.aspx",
        tags: "Database Performance, DB2 Performance, DB2 Performance Tuning, SQL Performance, Database locking, DB2 Monitoring, DB2 Monitor, SQL Optimization, DB2 LUW performance, DB2 UDB Performance, Ignite"
    }, /*----------END OF PRODUCT----------*/ {
        category: "DP",
        order: "D",
        featured: "no",
        code: "DPASYB",
        name: "Database Performance Analyzer for Sybase®",
        subTitle: "Resolve Sybase ASE Performance Problems",
        icon: "icon-dpasBk.png",
        donwloadLink: "/register/registrationb.aspx?Program=18344&c=70150000000Rb15",
        demolink: "none",
        productPageLink: "/Database-Performance-Analyzer-Sybase.aspx",
        tags: "Database Performance, Sybase Performance, Sybase Performance Tuning, SQL Performance, Sybase  Monitoring, Sybase Monitor, SQL Optimization, Sybase ASE Performance, Ignite"
    }, /*----------END OF PRODUCT----------*/ 
    /*   FREE TOOLS SECTION  */ {
        code: "TFPT",
        category: "FreeTool",
        order: "F",
        subcategory: "NM",
        name: "TFTP Server & SFTP/SCP Server",
        subTitle: "Transfer Executable Images & Configs with Ease",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=52&c=70150000000CcH2",
        tags: "Free Tool, TFTP, Server, SFTP/SCP, TFTP Server & SFTP/SCP Server"
    }, /*end of freetool*/ {
        code: "IPAT",
        category: "FreeTool",
        order: "F",
        subcategory: "NM",
        name: "IP Address Tracker",
        subTitle: "Scans, Tracks, & Consolidates IP Address Information",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=912&c=70150000000Ehqn",
        tags: "Free Tool,IP, Address, Tracker, IP Address Tracker"
    }, /*end of freetool*/ {
        code: "RTBM",
        category: "FreeTool",
        order: "F",
        subcategory: "NM",
        name: "Real-Time Bandwidth Monitor",
        subTitle: "Monitors Bandwidth Usage in Real-time",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/registrationb.aspx?program=1643&c=70150000000PDzJ",
        tags: "Free Tool, Real Time, Bandwidth, Monitor,Real-Time Bandwidth Monitor"
    }, /*end of freetool*/ {
        code: "RTNA",
        category: "FreeTool",
        order: "F",
        subcategory: "NM",
        name: "Real-time NetFlow Analyzer",
        subTitle: "Analyzes Network Traffic",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=852&c=70150000000DrSQ",
        tags: "Free Tool, Real Time, Bandwidth, Monitor,Real-Time Bandwidth Monitor"
    }, /*end of freetool*/ {
        code: "NDM",
        category: "FreeTool",
        order: "F",
        subcategory: "NM",
        name: "Network Device Monitor",
        subTitle: "Monitors Any Statistic on Any Network Device",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=991&c=70150000000OaIF",
        tags: "Free Tool, Network Device Monitor, Network, Device, Monitor"
    }, /*end of freetool*/ {
        code: "CDRT",
        category: "FreeTool",
        order: "F",
        subcategory: "NM",
        name: "Call Detail Record Tracker",
        subTitle: "Monitor VoIP Call Performance",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=17167&c=70150000000PWpP",
        tags: "Free Tool, Call Detail Record Tracker, Call, Detail, Record, Tracker"
    }, /*end of freetool*/ {
        code: "NCG",
        category: "FreeTool",
        order: "F",
        subcategory: "NM",
        name: "Network Config Generator",
        subTitle: "Quickly Configures Network Devices",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=968&c=70150000000FRws",
        tags: "Free Tool, Network Config Generator, Network, Config, Generator "
    }, /*end of freetool*/ {
        code: "IPSLA",
        category: "FreeTool",
        order: "F",
        subcategory: "NM",
        name: "IP SLA Monitor",
        subTitle: "Harness Cisco IP SLA to Analyze Performance Between Sites",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=896&c=70150000000EQ0I",
        tags: "Free Tool, IP SLA Monitor, IP, SLA, Monitor "
    }, /*end of freetool*/ {
        code: "SC",
        category: "FreeTool",
        order: "F",
        subcategory: "NM",
        name: "Subnet Calculator",
        subTitle: "Four Free IP Management Tools in One Download",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=92&c=70150000000CcHV",
        tags: "Free Tool, Subnet Calculator, Subnet, Calculator"
    }, /*end of freetool*/ {
        code: "WOL",
        category: "FreeTool",
        order: "F",
        subcategory: "NM",
        name: "Wake-on-LAN",
        subTitle: "Remotely Power Up PCs",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=214&c=70150000000CcH1",
        tags: "Free Tool, Wake-on-LAN, Wake on LAN, Wake, LAN"
    }, /*end of freetool*/ {
        code: "NFC",
        category: "FreeTool",
        order: "F",
        name: "NetFlow Configurator",
        order: "A",
        subTitle: "Monitors Inbound & Outbound Traffic Data",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=523&c=70150000000DGod",
        tags: "Free Tool, NetFlow Configurator,NetFlow, Configurator"
    }, /*end of freetool*/ {
        code: "FMM",
        category: "FreeTool",
        order: "F",
        subcategory: "NM",
        name: "Free Mobile Monitor for SolarWinds NPM or SAM",
        subTitle: "Manage NPM or SAM, plus access SSH, telnet, and RDP from your mobile device",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "http://downloads.solarwinds.com/solarwinds/Release/FreeTool/ZP1/ZP-FMM-Info/ZP-FMM-INFO-DI.html",
        tags: "Free Tool, Mobile Monitor, Mobile, Monitor,NPM,SAM"
    }, /*end of freetool*/ {
        code: "AC",
        category: "FreeTool",
        order: "F",
        subcategory: "NM",
        name: "Alert Central",
        subTitle: "FREE Alert Management, Escalation, and On-Call Scheduling",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/alertcentral/alertcentraldownload.aspx",
        tags: "Free Tool, Alert Central, Alert, Central"
    }, /*end of freetool*/ {
        code: "FB",
        category: "FreeTool",
        order: "F",
        subcategory: "NM LEM",
        subTitle: "Simplify Firewall Rule Change Requests and Troubleshooting",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/alertcentral/alertcentraldownload.aspx",
        tags: "Free Tool, Firewall Browser, Firewall, Browser"
    }, /*end of freetool*/ {
        code: "FTP",
        category: "FreeTool",
        order: "F",
        subcategory: "NM",
        name: "FTP Voyager Free FTP Client for Windows®",
        subTitle: "Secure file transfer, which includes automation, scheduling, and sync utilities",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "http://www.serv-u.com/ftpvoyager/free-download.asp",
        tags: "Free Tool, FTP Voyager Free FTP Client for Windows, FTP, Voyager,Client,Windows"
    }, /*end of freetool*/ {
        code: "IUAT",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "Inactive User Account Removal Tool",
        subTitle: "Scan Active Directory & Easily Remove Users",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=1800&c=70150000000PH8s",
        tags: "Free Tool, Inactive User Account Removal Tool, Inactive, User, Account, Removal, Tool"
    }, /*end of freetool*/ {
        code: "ICART",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "Inactive Computer Account Removal Tool",
        subTitle: "Scan Active Directory & Easily Remove Computers",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=1800&c=70150000000PH8s",
        tags: "Free Tool, Inactive Computer Account Removal Tool, Inactive, Computer, Account, Removal, Tool"
    }, /*end of freetool*/ {
        code: "UIT",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "User Import Tool",
        subTitle: "Quickly Create Users in Bulk & Specify Attributes",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=1800&c=70150000000PH8s",
        tags: "Free Tool, User Import Tool, User, Import, Tool"
    }, /*end of freetool*/ {
        code: "DTWA",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "Diagnostic Tool for the WSUS Agent",
        subTitle: "Easily check configuration files and associated values and test WSUS resource connections",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "http://downloads.solarwinds.com/solarwinds/Release/FreeTool/ZP1/WSUS-ZP-PM3/WSUS-MoreMoreSoftware.html",
        tags: "Free Tool, Diagnostic Tool for the WSUS Agent, Diagnostic, Tool, WSUS Agent"
    }, /*end of freetool*/ {
        code: "WTW",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "Web Transaction Watcher",
        subTitle: "Records and Monitors any Multi-step Web Transaction",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=1579&c=70150000000PBhD",
        tags: "Free Tool, Web Transaction Watcher, Web, Transaction, Watcher"
    }, /*end of freetool*/ {
        code: "WMI",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "WMI Monitor",
        subTitle: "Monitors Windows Applications & Servers",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=937&c=70150000000Ezdb",
        tags: "Free Tool, Web Transaction Watcher, Web, Transaction, Watcher"
    }, /*end of freetool*/ {
        code: "PAAD",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "Permissions Analyzer for Active Directory",
        subTitle: "Delivers Visibility Into Effective Permissions",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=1323&c=70150000000OzCs",
        tags: "Free Tool, Permissions Analyzer for Active Directory, Permissions, Analyzer, Active, Directory"
    }, /*end of freetool*/ {
        code: "EM",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "Exchange Monitor",
        subTitle: "Monitors Exchange Server's Health in Real Time",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=825&c=70150000000Djc6",
        tags: "Free Tool, Exchange Monitor, Exchange, Monitor"
    }, /*end of freetool*/ {
        code: "RTAA",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "Real-Time AppFlow Analyzer",
        subTitle: "Shows What Types of Traffic Are on Your Network",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=1421&c=70150000000Mq6X",
        tags: "Free Tool, Real-Time AppFlow Analyzer, Real time, AppFlow, Analyzer"
    }, /*end of freetool*/ {
        code: "SNMP",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "SNMP Enabler for Windows",
        subTitle: "Remotely Installs, Enables, & Configures SNMP on Multiple Windows Machines",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=1382&c=70150000000P2cK",
        tags: "Free Tool, SNMP Enabler for Windows, SNMP, Enabler,Windows"
    }, /*end of freetool*/ {
        code: "KSS",
        category: "FreeTool",
        order: "F",
        subcategory: "SM LEM",
        subTitle: "Collect, view and archive syslog messages and SNMP traps",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "http://www.kiwisyslog.com/free-edition.aspx?productType=ks&AppID=876&CampaignID=70150000000Es8J",
        tags: "Free Tool, Kiwi, Syslog, Server"
    }, /*end of freetool*/ {
        code: "VMM",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "VM Monitor",
        subTitle: "Monitors the Performance of VMware & Hyper-V Hosts",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=864&c=70150000000E3pU",
        tags: "Free Tool, VM Monitor, VM, Monitor"
    }, /*end of freetool*/ {
        code: "VMCC",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "VM-to-Cloud Calculator",
        subTitle: "Discovers Virtual Machines & Estimates the Cost to Move to the Cloud",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=1521&c=70150000000PANv",
        tags: "Free Tool, VM-to-Cloud Calculator"
    }, /*end of freetool*/ {
        code: "VMC",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "VM Console",
        subTitle: "Bounces VMs & Tracks Their Status from Your Desktop",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=1320&c=70150000000OzCi",
        tags: "Free Tool, VM Console, VM, Console"
    }, /*end of freetool*/ {
        code: "CPMPC",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "Cloud Performance Monitor Powered by CopperEgg",
        subTitle: "Monitor Cloud-based Servers with Ease",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=12119&c=70150000000PUtx",
        tags: "Free Tool, Cloud Performance Monitor Powered by CopperEgg, Cloud, Performance, Monitor, Powered, CopperEgg"
    }, /*end of freetool*/ {
        code: "SRTM",
        category: "FreeTool",
        order: "F",
        subcategory: "SM",
        name: "Storage Response Time Monitor",
        subTitle: "Identifies VMs With High Storage Latency",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=1645&c=70150000000PEMX",
        tags: "Free Tool, Storage Response Time Monitor,Storage, Response, Time, Monitor"
    }, /*end of freetool*/ {
        code: "SANM",
        category: "FreeTool",
        order: "F",
        name: "SAN Monitor",
        order: "B",
        subTitle: "Monitors Your Storage Array",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=997&c=70150000000OhZs",
        tags: "Free Tool, SAN Monitor, SAN, Monitor"
    }, /*end of freetool*/ {
        code: "ELC",
        category: "FreeTool",
        order: "F",
        subcategory: "LEM",
        name: "Event Log Consolidator",
        subTitle: "Consolidates Event Logs from up to 5 Servers",
        icon: "icon-freetoolsBk.png",
        donwloadLink: "/register/index.aspx?Program=1857&c=70150000000PIFp",
        tags: "Free Tool, Event Log Consolidator, Event, Log, Consolidator"
    } /*end of freetool*/ ]; /*Adding Category or Sub Categorie to search repeat */
    $scope.categoryClassSearch = function(product) {
        if (product.category == "FreeTool") {
            return product.subcategory;
        } else {
            return product.category;
        };
    }; /*Category Selection Default*/
    $scope.selectCategory = 'all';
}); /*end of app Tabs Function jquery*/
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
