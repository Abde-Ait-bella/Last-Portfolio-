import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import React, { useState, useEffect } from "react"
import { Reorder } from "framer-motion"
import Projects from "./Projetcts"
import Contact from "./Contact"
import MyStack from "./Mystack"


export default function Layout() {
    // États pour la gestion de la responsivité
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isVertical, setIsVertical] = useState(window.innerWidth <= 768);
    
    // État pour les onglets
    const [tabs, setTabs] = useState([
        { label: "Mon Projects", component: <Projects /> },
        { label: "Mon techStack", component: <MyStack /> },
        { label: "Contact", component: <Contact /> },
    ]);
    
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [cursorVariant, setCursorVariant] = useState("default");

    // Détecter les changements de taille de fenêtre
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            setIsVertical(width <= 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Styles
    const container = {
        width: '100%',
        height: isVertical ? "auto" : "82vh",
        minHeight: isVertical ? "60vh" : "auto",
        position: "relative",
        borderRadius: 10,
        background: 'transparent',
        overflow: "hidden",
        boxShadow: "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "excon",
    };

    const nav = {
        padding: isVertical ? "10px" : "15px 15px",
        borderRadius: "10px",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottom: "1px solid rgb(57, 54, 54)",
    };

    const tabsContainer = {
        padding: 0,
        margin: 0,
        display: "flex",
        width: "100%",
        flexDirection: isVertical ? "column" : "row",
        gap: isVertical ? "8px" : "0",
    };

    const tab = {
        padding: isVertical ? "8px 10px" : "10px 15px",
        borderRadius: 5,
        borderBottomLeftRadius: isVertical ? 5 : 0,
        borderBottomRightRadius: isVertical ? 5 : 0,
        width: "100%",
        position: "relative",
        cursor: "grab",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: 0,
        userSelect: "none",
        color: "white",
    };

    const underline = {
        position: "absolute",
        bottom: isVertical ? 0 : -2,
        left: 0,
        right: 0,
        height: 2,
        background: "var(--accent)",
    };

    const iconContainer = {
        display: "flex",
        justifyContent: "center",
        flex: 1,
        padding: isVertical ? "15px 10px" : 0,
    };

    const icon = {
        width: "100%",
    };

    // Fonctions pour le curseur
    const handleHover = () => setCursorVariant("hover");
    const handleLeave = () => setCursorVariant("default");
    const handleDrag = () => setCursorVariant("grabbing");

    return (
        <div style={container} className="border-2 border-slate-500 rounded-md">
            <nav style={nav} >
                <Reorder.Group 
                    as="ul" 
                    axis={isVertical ? "y" : "x"}
                    values={tabs} 
                    onReorder={setTabs}
                    style={tabsContainer}
                >
                    {tabs.map((item) => (
                        <Reorder.Item
                            as="li"
                            key={item.label}
                            value={item}
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
                                backgroundColor: item.label === selectedTab.label 
                                    ? "rgba(187, 177, 249, 0.39)" 
                                    : "rgba(54, 54, 54, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            whileDrag={{ 
                                scale: 1.1,
                                backgroundColor: "rgba(187, 177, 249, 0.6)",
                                cursor: "grabbing",
                                zIndex: 10,
                            }}
                            style={tab}
                            onClick={() => setSelectedTab(item)}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                            onDragStart={handleDrag}
                            onDragEnd={handleLeave}
                            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                            dragElastic={0.1}
                        >
                            {`${item.label}`}
                            {item.label === selectedTab.label ? (
                                <motion.div
                                    style={underline}
                                    layoutId="underline"
                                    id="underline"
                                />
                            ) : null}
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
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



