import { MainMenuCursor } from './MainMenuCursor';

const MainMenuItems = ({ items, selectedIndex }) => {
  return (
    <ul className="text-2xl flex flex-col gap-6 text-center">
      {items.map((item, index) => (
        <li
          key={item}
          className={`flex items-center justify-center text-5xl h-[30px] font-bold`}
        >
          {index === selectedIndex ? (
            <div className="flex items-center">
              {/* MainMenuCursor will not affect the spacing of the text item */}
              <MainMenuCursor direction="left" />
              <span className="mx-4">{item}</span>
              <MainMenuCursor direction="right" />
            </div>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  );
};

export default MainMenuItems;
