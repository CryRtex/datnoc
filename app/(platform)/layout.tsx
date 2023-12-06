import { ClerkProvider } from "@clerk/nextjs"

const platfromLayout = ({
    children,

}: {
    children: React.ReactNode
}) => {
    return (
       <ClerkProvider>
        {children}
       </ClerkProvider>
    )
}
export default platfromLayout