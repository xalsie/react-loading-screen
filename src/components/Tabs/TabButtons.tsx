export default function TabButtons({ selectedTab, activeTab, setActiveTab }) {
    return (
        // <nav className="ml-40 grid grid-cols-3 gap-4 content-center text-sm text-white">
        <nav className="ml-40 flex flex-wrap items-stretch gap-4 content-center text-sm text-white">
            {selectedTab.map((item, index) => (
                <div
                    className={`bg-[#ffffff2e] py-1 px-4 w-fit h-fit rounded cursor-pointer ${
                        index === activeTab && "active"
                    }`}
                    key={item.Title}
                    onClick={() => setActiveTab(index)}
                >
                    {item.Title}
                </div>
            ))}
        </nav>
    );
}
