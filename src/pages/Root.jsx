import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar"
import { useEffect, useState } from "react"
import TopBar from "../components/TopBar";
import ThemeToggle from "../components/ThemeToggle";

const Root = () => {

  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    setIsSmall(window.innerWidth < 768)

    const handleResize = (e) => {
      setIsSmall(window.innerWidth < 768)
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={"w-screen h-screen flex transition-colors duration-500 ease-in-out " + (isSmall ? "flex-col" : "justify-center")}>
      {isSmall ? <TopBar /> : <SideBar />}
      <Outlet context={isSmall}/>
    </div>
  )
}

export default Root
