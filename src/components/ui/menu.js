import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function Menu() {
  return (
    <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
      <MenubarMenu>
        <MenubarTrigger>Editify</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>About Editify</MenubarItem>
          <MenubarItem>
            Quit Editify <MenubarShortcut>⌘Q</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="relative">File</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>New</MenubarSubTrigger>
            <MenubarSubContent className="w-[230px]">
              <MenubarItem>
                Quick Start <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>From Template</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Template 1</MenubarItem>
                  <MenubarItem>Template 2</MenubarItem>
             
                </MenubarSubContent>
              </MenubarSub>
            </MenubarSubContent>
          </MenubarSub>

          <MenubarItem>
            Close Window <MenubarShortcut>⌘W</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
          <MenubarItem>
            Save Template <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
            <MenubarSubTrigger>Import</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Media</MenubarItem>
              <MenubarItem>Audio</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>From Youtube</MenubarItem>
              <MenubarItem>From Instagram</MenubarItem>
              <MenubarItem>From TikTok</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>

          <MenubarSeparator />
          <MenubarItem>
            Show in Folder <MenubarShortcut>⇧⌘R</MenubarShortcut>{" "}
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem disabled>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>
            Cut <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Copy <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Paste <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Select All <MenubarShortcut>⌘A</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Deselect All <MenubarShortcut>⇧⌘A</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>
            Minimalistic Workspace
          </MenubarCheckboxItem>
          <MenubarCheckboxItem>Workspace 2</MenubarCheckboxItem>
          <MenubarCheckboxItem>Workspace 3</MenubarCheckboxItem>

          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Get Support</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
