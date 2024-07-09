export default function TabContent({ selectedTab, activeTab }) {
    return (
        <div className="mx-40">
            <div className="">{selectedTab[activeTab].Description}</div>
            <div className="absolute bottom-0 right-0 -z-10">
                <img src={selectedTab[activeTab].Image} />
            </div>
        </div>
    );
}
