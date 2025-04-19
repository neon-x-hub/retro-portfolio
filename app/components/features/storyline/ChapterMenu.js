import { useEffect, useRef } from 'react';
import { MainMenuCursor } from "../main_menu/MainMenuCursor"
import ScrollableText from "../../core/ScrollableText"

export default function ChapterMenu({ items, selectedIndex }) {
    const containerRef = useRef(null);
    const selectedItemRef = useRef(null);

    useEffect(() => {
        if (selectedItemRef.current && containerRef.current) {
            const container = containerRef.current;
            const selectedItem = selectedItemRef.current;

            // Get container and item dimensions
            const containerRect = container.getBoundingClientRect();
            const itemRect = selectedItem.getBoundingClientRect();

            // Calculate if item is out of view
            if (itemRect.top < containerRect.top) {
                // Scroll up to show the item at the top
                container.scrollTop -= (containerRect.top - itemRect.top);
            } else if (itemRect.bottom > containerRect.bottom) {
                // Scroll down to show the item at the bottom
                container.scrollTop += (itemRect.bottom - containerRect.bottom);
            }
        }
    }, [selectedIndex]);

    return (
        <div className="h-[50%] w-[85%] flex justify-center pt-4 nes-container is-rounded">
            <ul
                ref={containerRef}
                className="text-2xl flex flex-col gap-6 text-center w-[97%] overflow-y-auto scroll-hide"
            >
                {items.map((item, index) => (
                    <li
                        key={`${index}-chapter`}
                        ref={index === selectedIndex ? selectedItemRef : null}
                        className={`flex items-center text-3xl h-[30px] font-bold scroll-hide`}
                    >
                        {index === selectedIndex ? (
                            <div className="flex items-center w-full"
                            style={{
                                background: "#cfcfcf",
                            }}>
                                {/* MainMenuCursor will not affect the spacing of the text item */}
                                <MainMenuCursor direction="left" />
                                <ScrollableText
                                    text={item}
                                    selected={true}
                                />
                            </div>
                        ) : (
                            <ScrollableText
                                text={item}
                                selected={false}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}
