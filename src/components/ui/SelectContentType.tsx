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
import { ContentTypes } from "./CreateContentModel";

export interface SelectContentProps {
  type: TypeOptionsProp;
  setType: React.Dispatch<React.SetStateAction<TypeOptionsProp>>;
  reference: any;
}
export interface TypeOptionsProp {
  id: number;
  name: ContentTypes;
  avatar: ReactElement;
}
export const typeOptions: TypeOptionsProp[] = [
  {
    id: 1,
    name: ContentTypes.TWITTER,
    avatar: <TwitterIcon />,
  },
  {
    id: 2,
    name: ContentTypes.YOUTUBE,
    avatar: <YoutubeIcon />,
  },
  {
    id: 3,
    name: ContentTypes.LINK,
    avatar: <DocsIcon />,
  },
  {
    id: 4,
    name: ContentTypes.DOC,
    avatar: <LinkIcon />,
  },
];

export default function SelectContentType({
  type,
  setType,
  reference,
}: SelectContentProps) {
  //   const [selected, setSelected] = useState(typeOptions[3]);
  setType({ id: 1, avatar: typeOptions[0], name: "TWITTE" }); //FIX THIS TypeOptionsProp for setType
  return (
    <Listbox value={type} onChange={setType}>
      <Label className="block text-sm/6 font-medium text-gray-900">
        Select Type
      </Label>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <div className="size-5 shrink-0 rounded-full">{type.avatar}</div>
            <span className="block truncate" ref={reference}>
              {type.name}
            </span>
          </span>
          <ChevronDownIcon aria-hidden="true" />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {typeOptions.map((option) => (
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
