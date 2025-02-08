
interface LinkCountCard {
    label: string,
    count:string,
    bg:string
}

const linkCount: LinkCountCard[] = [
    {label:"Total Links", count:"786", bg:"bg-gradient-to-br from-red-500 to-neutral-900 text-gray-100"},
    {label:"Twitter Links", count:"12", bg:"bg-gradient-to-br from-neutral-700 to-neutral-900 text-gray-100"},
    {label:"Documents", count:"420", bg:"bg-gradient-to-br from-blue-500 to-neutral-900 text-gray-100"},
    {label:"Favourites", count:"345", bg:"bg-gradient-to-br from-orange-500 to-neutral-900 text-gray-100"},
]
export const LinkCounts = () => {


  return (
    <div className="flex justify-center items-center flex-wrap gap-4 w-full">
    {linkCount.map((link)=> (
        <div key={link.label} className={`${link.bg} flex flex-col gap-2 justify-center items-center p-4 h-36 rounded-lg bg-white w-36 md:min-w-72`}>
            <h1 className="text-sm md:text-md text-gray-300 font-semibold">{link.label}</h1>
            <h1 className="text-2xl font-extrabold">{link.count}</h1>
        </div>
    ))}
    </div>
  )
}