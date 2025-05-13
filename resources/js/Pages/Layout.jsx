import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import React from "react"
import { useState } from "react"
import Projects from "./Projetcts"
import Contact from "./Contact"
import MyStack from "./Mystack"


export default function Layout() {
    /**
     * ==============   Styles   ================
    */

    const container = {
        width: '100%',
        height: "82vh",
        position: "relative",
        // maxHeight: 360,
        borderRadius: 10,
        background: 'transparent',
        // backdropFilter: 'blur(8px)',
        // WebkitBackdropFilter: 'blur(8px)', // For Safari support
        //    background: "white",
        overflow: "hidden",
        boxShadow:
            "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "excon",
    }

    const nav = {
        // background: "#242629",
        padding: "15px 15px",
        borderRadius: "10px",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottom: "1px solid rgb(57, 54, 54)",
        // height: 44,
    }

    const tabsStyles = {
        // listStyle: "none",
        padding: 0,
        margin: 0,
        // fontWeight: 500,
        // fontSize: 14,    
    }

    const tabsContainer = {
        ...tabsStyles,
        display: "flex",
        width: "100%",
    }

    const tab = {
        ...tabsStyles,
        borderRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: "100%",
        padding: "10px 15px",
        position: "relative",
        // background: "white",
        cursor: "pointer",
        // height: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // flex: 1,
        minWidth: 0,
        userSelect: "none",
        color: "white",
    }

    const underline = {
        position: "absolute",
        bottom: -2,
        left: 0,
        right: 0,
        height: 2,
        background: "var(--accent)",
    }

    const iconContainer = {
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        flex: 1,
    }

    const icon = {
        width: "100%",
    }

    // 🧾 Onglets
    const tabs = [
        { label: "Mon Projects", component: <Projects /> },
        { label: "Mon techStack", component: <MyStack /> },
        { label: "Contact", component: <Contact /> },
    ]

    const [selectedTab, setSelectedTab] = useState(tabs[0])


    return (
        <div style={container} className="border-2 border-slate-500 rounded-full ">
            <nav style={nav} >
                <ul style={tabsContainer}>
                    {tabs.map((item) => (
                        <motion.li
                            key={item.label}
                            initial={false}
                            animate={{
                                backgroundColor:
                                    item.label === selectedTab.label ? "rgba(187, 177, 249, 0.14) " : "transparent",
                                    color: item.label === selectedTab.label ? "#ffff" : "#F2F9FE",
                                    fontWeight: item.label === selectedTab.label ? "500" : "normal",
                            }}
                            transition={{ duration: 0.3 }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: item.label === selectedTab.label ? "rgba(187, 177, 249, 0.39)" : "rgba(54, 54, 54, 0.5)" 
                                // backgroundColor: item === selectedTab ? "transparent" : "transparent"
                            }}
                            whileTap={{ scale: 0.95 }}
                            style={tab}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.label}`}
                            {item === selectedTab ? (
                                <motion.div
                                    style={underline}
                                    layoutId="underline"
                                    id="underline"
                                />
                            ) : null}
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <main style={iconContainer}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={icon}
                    >
                        {selectedTab ? selectedTab.component : ""}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    )
}



