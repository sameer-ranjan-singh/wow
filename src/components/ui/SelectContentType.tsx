import { ReactElement, useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon } from "../../icons/CheckIcon";
import { ChevronDownIcon } from "../../icons/ChevronDownIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { DocsIcon } from "../../icons/DocsIcon";
import { LinkIcon } from "../../icons/LinkIcon";

export interface SelectContentProps {
  reference: any;
}

export enum NameKeyValueEnum {
  YOUTUBE = "Youtube",
  TWITTER = "Twitter",
  LINK = "Link",
  DOC = "Doc",
}

export enum NameKeyOnlyEnum {
  YOUTUBE,
  TWITTER,
  LINK,
  DOC,
}

export interface TypeObjectInterface {
  id: number;
  name: NameKeyValueEnum[NameKeyOnlyEnum];
  avatar: ReactElement;
}

export const typeArray: TypeObjectInterface[] = [
  {
    id: 1,
    name: NameKeyValueEnum.TWITTER,
    avatar: <TwitterIcon />,
  },
  {
    id: 2,
    name: NameKeyValueEnum.YOUTUBE,
    avatar: <YoutubeIcon />,
  },
  {
    id: 3,
    name: NameKeyValueEnum.LINK,
    avatar: <DocsIcon />,
  },
  {
    id: 4,
    name: NameKeyValueEnum.DOC,
    avatar: <LinkIcon />,
  },
];

export default function SelectContentType({ reference }: SelectContentProps) {
  const [typeObj, setTypeObj] = useState(typeArray[0]);
  console.log("typeObj", typeObj);


  
  return (
    <Listbox value={typeObj} onChange={setTypeObj}>
      <Label
        className="block text-sm/6 font-medium text-gray-900 pl-2 pt-2">
        Select Type
      </Label>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <div className="size-5 shrink-0 rounded-full">{typeObj.avatar}</div>
            <span className="block truncate" ref={reference}>
              {typeObj.name}
            </span>
          </span>
          <ChevronDownIcon aria-hidden="true" />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {typeArray.map((option) => (
            <ListboxOption
              key={option.id}
              value={option}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
            >
              <div className="flex items-center">
                <div className="size-5 shrink-0 rounded-full">
                  {option.avatar}
                </div>
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {option.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                <CheckIcon aria-hidden="true" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
