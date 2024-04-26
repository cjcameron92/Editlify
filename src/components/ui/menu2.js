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
  import Link from "next/link";
  
  export function Menu2() {
    return (
      <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
        <MenubarMenu>
          <MenubarTrigger>Editify</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>About Editify</MenubarItem>
            <MenubarItem>
              <Link href="/">
                Quit Editify <MenubarShortcut>⌘Q</MenubarShortcut>
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="relative">File</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>New</MenubarSubTrigger>
              <MenubarSubContent className="w-[230px]">
                <Link href="/project">
                  <MenubarItem>
                    Quick Start <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                </Link>
  
                <MenubarSub>
                  <MenubarSubTrigger>From Template</MenubarSubTrigger>
                  <MenubarSubContent>
                    <Link href="/project">
                      <MenubarItem>Template 1</MenubarItem>
                    </Link>
                    <Link href="/project">
                      <MenubarItem>Template 2</MenubarItem>
                    </Link>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarSubContent>
            </MenubarSub>
  
            <Link href="/">
              <MenubarItem disabled>
                Close Window <MenubarShortcut>⌘W</MenubarShortcut>
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            
            <MenubarSub>
              <MenubarItem disabled>
                Save Template <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarSubTrigger>Import</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem disabled>Media</MenubarItem>
                <MenubarItem disabled>Audio</MenubarItem>
                <MenubarSeparator />
                <MenubarItem disabled>From Youtube</MenubarItem>
                <MenubarItem disabled>From Instagram</MenubarItem>
                <MenubarItem disabled>From TikTok</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
  
            <MenubarSeparator />
            <MenubarItem disabled>
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
            <MenubarItem disabled>
              Select All <MenubarShortcut>⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Deselect All <MenubarShortcut>⇧⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu disabled>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>
              Minimalistic Workspace
            </MenubarCheckboxItem>
            <MenubarCheckboxItem disabled>Workspace 2</MenubarCheckboxItem>
            <MenubarCheckboxItem disabled>Workspace 3</MenubarCheckboxItem>
  
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
  