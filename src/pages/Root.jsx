import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar"
import { useEffect, useState, useCallback } from "react"
import TopBar from "../components/TopBar";

const Root = () => {

  const [isSmall, setIsSmall] = useState(false)

  const handleResize = useCallback((e) => {
    setIsSmall(window.innerWidth < 768)
  }, [window.innerWidth])

  useEffect(() => {
    setIsSmall(window.innerWidth < 768)

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={"w-fill h-fill flex transition-colors duration-500 ease-in-out " + (isSmall ? "flex-col" : "justify-center")}>
      {isSmall ? <TopBar /> : <SideBar />}
      <Outlet context={isSmall} />
    </div>
  )
}

export default Root
