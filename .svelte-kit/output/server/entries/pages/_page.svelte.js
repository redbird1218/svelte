import { c as create_ssr_component, s as setContext, e as escape, b as add_attribute, g as getContext, d as compute_slots, f as compute_rest_props, h as createEventDispatcher, i as spread, j as escape_attribute_value, k as escape_object, a as subscribe, v as validate_component, l as each } from "../../chunks/index2.js";
import { m as modeCurrent, a as setInitialClassState } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const cBase$2 = "";
const ListBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { multiple = false } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { padding = "px-4 py-2" } = $$props;
  let { labelledby = "" } = $$props;
  setContext("multiple", multiple);
  setContext("rounded", rounded);
  setContext("active", active);
  setContext("hover", hover);
  setContext("padding", padding);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$2} ${spacing} ${rounded} ${$$props.class ?? ""}`;
  return `<div class="${"listbox " + escape(classesBase, true)}" role="listbox"${add_attribute("aria-labelledby", labelledby, 0)} data-testid="listbox">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase$1 = "cursor-pointer -outline-offset-[3px]";
const cLabel$1 = "flex items-center space-x-4";
const ListBoxItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesBase;
  let classesLabel;
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { multiple = getContext("multiple") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let checked;
  let elemInput;
  function updateCheckbox(group2) {
    checked = group2.indexOf(value) >= 0;
  }
  function updateGroup(checked2) {
    const index = group.indexOf(value);
    if (checked2) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  {
    if (multiple)
      updateCheckbox(group);
  }
  {
    if (multiple)
      updateGroup(checked);
  }
  selected = multiple ? group.includes(value) : group === value;
  classesActive = selected ? active : hover;
  classesBase = `${cBase$1} ${rounded} ${padding} ${classesActive} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel$1}`;
  return `<label>
	<div class="${"listbox-item " + escape(classesBase, true)}" data-testid="listbox-item" role="option"${add_attribute("aria-selected", selected, 0)} tabindex="0">
		<div class="h-0 w-0 overflow-hidden">${multiple ? `<input type="checkbox"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${add_attribute("checked", checked, 1)}>` : `<input type="radio"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}>`}</div>
		
		<div class="${"listbox-label " + escape(classesLabel, true)}">
			${$$slots.lead ? `<div class="listbox-label-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
			
			<div class="listbox-label-content flex-1">${slots.default ? slots.default({}) : ``}</div>
			
			${$$slots.trail ? `<div class="listbox-label-trail">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div></div></label>`;
});
const cBase = "inline-block";
const cLabel = "unstyled flex items-center";
const cTrack$1 = "flex transition-all duration-[200ms] cursor-pointer";
const cThumb$1 = "w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow";
const SlideToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cTrackActive;
  let cThumbBackground;
  let cThumbPos;
  let classesDisabled;
  let classesBase;
  let classesLabel;
  let classesTrack;
  let classesThumb;
  let $$restProps = compute_rest_props($$props, ["name", "checked", "size", "active", "border", "rounded", "label"]);
  let $$slots = compute_slots(slots);
  createEventDispatcher();
  let { name } = $$props;
  let { checked = false } = $$props;
  let { size = "md" } = $$props;
  let { active = "bg-surface-900 dark:bg-surface-300" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "rounded-full" } = $$props;
  let { label = "" } = $$props;
  let trackSize;
  switch (size) {
    case "sm":
      trackSize = "w-12 h-6";
      break;
    case "lg":
      trackSize = "w-20 h-10";
      break;
    default:
      trackSize = "w-16 h-8";
  }
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  cTrackActive = checked ? active : "bg-surface-400 dark:bg-surface-700 cursor-pointer";
  cThumbBackground = checked ? "bg-white/75" : "bg-white";
  cThumbPos = checked ? "translate-x-full" : "";
  classesDisabled = $$props.disabled === true ? "opacity-50" : "hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer";
  classesBase = `${cBase} ${rounded} ${classesDisabled} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel}`;
  classesTrack = `${cTrack$1} ${border} ${rounded} ${trackSize} ${cTrackActive}`;
  classesThumb = `${cThumb$1} ${rounded} ${cThumbBackground} ${cThumbPos}`;
  return `<div${add_attribute("id", label, 0)} class="${"slide-toggle " + escape(classesBase, true)}" data-testid="slide-toggle" role="switch"${add_attribute("aria-label", label, 0)}${add_attribute("aria-checked", checked, 0)} tabindex="0"><label class="${"slide-toggle-label " + escape(classesLabel, true)}">
		<input${spread(
    [
      { type: "checkbox" },
      { class: "slide-toggle-input hidden" },
      { name: escape_attribute_value(name) },
      escape_object(prunedRestProps()),
      { disabled: $$props.disabled || null }
    ],
    {}
  )}${add_attribute("checked", checked, 1)}>
		
		<div class="${[
    "slide-toggle-track " + escape(classesTrack, true),
    $$props.disabled ? "cursor-not-allowed" : ""
  ].join(" ").trim()}"><div class="${[
    "slide-toggle-thumb " + escape(classesThumb, true),
    $$props.disabled ? "cursor-not-allowed" : ""
  ].join(" ").trim()}"></div></div>
		
		${$$slots.default ? `<div class="slide-toggle-text ml-3">${slots.default ? slots.default({}) : ``}</div>` : ``}</label></div>`;
});
const cTrack = "cursor-pointer";
const cThumb = "aspect-square scale-[0.8] flex justify-center items-center";
const cIcon = "w-[70%] aspect-square";
const LightSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trackBg;
  let thumbBg;
  let thumbPosition;
  let iconFill;
  let classesTrack;
  let classesThumb;
  let classesIcon;
  let $modeCurrent, $$unsubscribe_modeCurrent;
  $$unsubscribe_modeCurrent = subscribe(modeCurrent, (value) => $modeCurrent = value);
  let { bgLight = "bg-surface-50" } = $$props;
  let { bgDark = "bg-surface-900" } = $$props;
  let { fillLight = "fill-surface-50" } = $$props;
  let { fillDark = "fill-surface-900" } = $$props;
  let { width = "w-12" } = $$props;
  let { height = "h-6" } = $$props;
  let { ring = "ring-[1px] ring-surface-500/30" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  const cTransition = `transition-all duration-[200ms]`;
  const svgPath = {
    sun: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",
    moon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
  };
  if ($$props.bgLight === void 0 && $$bindings.bgLight && bgLight !== void 0)
    $$bindings.bgLight(bgLight);
  if ($$props.bgDark === void 0 && $$bindings.bgDark && bgDark !== void 0)
    $$bindings.bgDark(bgDark);
  if ($$props.fillLight === void 0 && $$bindings.fillLight && fillLight !== void 0)
    $$bindings.fillLight(fillLight);
  if ($$props.fillDark === void 0 && $$bindings.fillDark && fillDark !== void 0)
    $$bindings.fillDark(fillDark);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.ring === void 0 && $$bindings.ring && ring !== void 0)
    $$bindings.ring(ring);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  trackBg = $modeCurrent === true ? bgLight : bgDark;
  thumbBg = $modeCurrent === true ? bgDark : bgLight;
  thumbPosition = $modeCurrent === true ? "translate-x-[100%]" : "";
  iconFill = $modeCurrent === true ? fillLight : fillDark;
  classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${$$props.class ?? ""}`;
  classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`;
  classesIcon = `${cIcon} ${iconFill}`;
  $$unsubscribe_modeCurrent();
  return `${$$result.head += `<!-- HEAD_svelte-qwgpj2_START --><!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-qwgpj2_END -->`, ""}

<div class="${"lightswitch-track " + escape(classesTrack, true)}" role="switch" aria-label="Light Switch"${add_attribute("aria-checked", $modeCurrent, 0)} title="${"Toggle " + escape($modeCurrent === true ? "Dark" : "Light", true) + " Mode"}" tabindex="0">
	<div class="${"lightswitch-thumb " + escape(classesThumb, true)}">
		<svg class="${"lightswitch-icon " + escape(classesIcon, true)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path${add_attribute("d", $modeCurrent ? svgPath.sun : svgPath.moon, 0)}></path></svg></div></div>`;
});
const FilterButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { target } = $$props;
  let { title = "Placeholder" } = $$props;
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<button class="btn flex flex-row justify-start btn-sm min-w-[45px] rounded-md border-2 dark:border-surface-600 border-[#EDF1F7] !text-base md:px-4 h-11 "><span class="stroke-[#6C6C85] dark:stroke-slate-300"></span>
	<span class="font-sans !text-[#6C6C85]">${escape(title)}</span></button>



<div class="card w-48 shadow-xl py-2 z-40" data-popup="filterPopup">${validate_component(ListBox, "ListBox").$$render($$result, { rounded: "rounded-none" }, {}, {
    default: () => {
      return `${validate_component(ListBoxItem, "ListBoxItem").$$render($$result, { name: "medium", value: "books" }, {}, {
        lead: () => {
          return `${validate_component(SlideToggle, "SlideToggle").$$render(
            $$result,
            {
              name: "slider-large",
              value: "books",
              active: "bg-surface-backdrop-token",
              size: "sm"
            },
            {},
            {}
          )}
			`;
        },
        default: () => {
          return `TitlePlaceholder
		`;
        }
      })}`;
    }
  })}
	<div class="arrow bg-surface-100-800-token"></div></div>

<div class="card w-48 shadow-xl py-2 z-40" data-popup="columnPopup">${validate_component(ListBox, "ListBox").$$render($$result, { rounded: "rounded-none" }, {}, {
    default: () => {
      return `${validate_component(ListBoxItem, "ListBoxItem").$$render($$result, { name: "medium", value: "books" }, {}, {
        lead: () => {
          return `${validate_component(SlideToggle, "SlideToggle").$$render(
            $$result,
            {
              name: "slider-large",
              value: "books",
              active: "bg-surface-backdrop-token",
              size: "sm"
            },
            {},
            {}
          )}
			`;
        },
        default: () => {
          return `TitlePlaceholder
		`;
        }
      })}`;
    }
  })}
	<div class="arrow bg-surface-100-800-token"></div></div>`;
});
const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "SellerName" } = $$props;
  let { country = "SellerName" } = $$props;
  let { site = "SellerName" } = $$props;
  const list = {
    "Trading Type": "Trading Type",
    "Minimum": "Minimum",
    "Max": "Max",
    "Headline": "Headline",
    "Site Name": "Site Name",
    "Payment Method": "Payment Method",
    "User": "User"
  };
  let { popupProps } = $$props;
  console.log("props", popupProps);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.country === void 0 && $$bindings.country && country !== void 0)
    $$bindings.country(country);
  if ($$props.site === void 0 && $$bindings.site && site !== void 0)
    $$bindings.site(site);
  if ($$props.popupProps === void 0 && $$bindings.popupProps && popupProps !== void 0)
    $$bindings.popupProps(popupProps);
  return `<div class="shadow-md w-[95%] w-fit md:max-w-[50%] mx-auto mx-auto left-0 right-0 card p-4"><dl class="list"><li class="flex flex-row"><span class="absolute right-1 top-2"></span>
			<span class="flex text-figma-font font-sans font-bold !ml-0 flex-row px-0 !py-0">${escape(title)}</span>
		</li><div class="gap-1 pb-2"><span class="badge variant-soft z-10">country</span>
			<span class="badge variant-soft z-10">site</span>
		</div><hr class=""><ul><li class="flex flex-row font-sans">${each(Object.entries(list), ([key, value]) => {
    return `${escape(key)}: ${escape(value)}
					<br>`;
  })}</li></ul></dl></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container card pt-8 mt-4 max-w-[50%] mx-auto flex flex-col justify-center items-center"><div class="mb-8 space-y-5"><h1 class="h1">Tradingbro.io Application</h1>

		<div class="flex py-12 gap-4 ">Lightswitch${validate_component(LightSwitch, "LightSwitch").$$render($$result, { ring: "ring-white", width: "w-[48px]" }, {}, {})}</div> 

		<div>The figma file can be found 
			<a class="underline" href="https://www.figma.com/file/elhS7rfboC3aVdUoa19lJ5/tradingbro.io-(2)?type=design&node-id=101%3A2934&t=8BraDmbdqSoVPbAr-1">Here</a>

			<p class="">The tasks can be found at the readme of the repo <a href=""></a></p>

			<p class="mt-4 mb-8">Fork the repo and let me know once you submitted your branch</p>
			<hr></div>

			<h2 class="text-2xl">Button</h2>
		<div class="card mb-12 gap-4 flex mr-auto border-2 p-4 ">${validate_component(FilterButton, "FilterButton").$$render($$result, { title: "Columns", target: "columnPopup" }, {}, {})}
			${validate_component(FilterButton, "FilterButton").$$render($$result, { title: "Filters", target: "filterPopup" }, {}, {})}</div>

		<hr>
		<h2 class="my-4 text-2xl">Popup
		</h2>


		${`<div class="a">${validate_component(Popup, "Popup").$$render($$result, {}, {}, {})}</div>`}</div></div>`;
});
export {
  Page as default
};
