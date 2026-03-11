export default function TabSwitcher({tabs =[], activeTab, onTabChange}) {
    return (
        <div className="bg-grey-11 border border-grey-15 p-3.5 max-mobile:p-2 rounded-full flex items-center h-fit">
            {tabs.map((t) => (
                <button key={t.key} onClick={() => onTabChange(t.key)} className={activeTab === t.key ? "bg-green-60 px-6 py-3.5 max-tablet:px-4 max-tablet:py-2.5 max-mobile:px-3 max-mobile:py-2 rounded-full text-grey-11 text-lg max-tablet:text-sm max-mobile:text-xs whitespace-nowrap" : "text-white text-lg max-tablet:text-sm max-mobile:text-xs px-6 py-3.5 max-tablet:px-4 max-tablet:py-2.5 max-mobile:px-3 max-mobile:py-2 rounded-full whitespace-nowrap"}>{t.label}</button>
            ))}
        </div>
    )
}