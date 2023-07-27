import Button from "@/Components/Button";
import { Link } from "@inertiajs/react";
import React from "react";
import SubscriptionDetail from "./SubscriptionDetail";
import { UserMenu, UserOthers } from "./MenuList";
import MenuItem from "./MenuItem";

const Sidebar = ({ auth }) => {
    console.log(auth);
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {UserMenu.map((item, index) => (
                            <MenuItem
                                key={`menu-${index}`}
                                link={item.link}
                                icon={item.icon}
                                isActive={
                                    item.link
                                        ? route().current(item.link)
                                        : false
                                }
                                text={item.text}
                            />
                        ))}
                    </div>
                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {UserOthers.map((item, index) => (
                            <MenuItem
                                key={`others-${index}`}
                                link={item.link}
                                icon={item.icon}
                                isActive={
                                    item.link
                                        ? route().current(item.link)
                                        : false
                                }
                                text={item.text}
                                method={item.method}
                            />
                        ))}
                    </div>

                    {auth.activePlan && (
                        <SubscriptionDetail
                            isPremium={auth.activePlan.name === "Premium"}
                            name={auth.activePlan.name}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}

                    {/* Basic */}
                    {/* <div class="mt-auto pr-[30px]">
                        <div class="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1]">
                            <div class="text-black text-lg font-semibold mb-8">
                                Basic
                            </div>
                            <div class="text-black text-sm mb-2">
                                5 of 30 hari
                            </div>
                            <div class="rounded-full w-full h-[6px] bg-[#f1f1f1]">
                                <div class="rounded-full h-full w-2/12 bg-orange-500"></div>
                            </div>
                        </div>
                    </div> */}

                    {/* Pro Plan */}
                    {/* <div className="mt-auto pr-[30px]">
                        <div className="p-5 bg-black rounded-[25px]">
                            <img src="/icons/ic_star-rounded.svg" alt="" />
                            <div className="text-white text-lg font-semibold mt-4 mb-8">
                                For Greatest
                            </div>
                            <div className="text-white text-sm mb-2">
                                12 of 30 hari
                            </div>
                            <div className="rounded-full w-full h-[6px] bg-[#333333]">
                                <div className="rounded-full h-full w-9/12 bg-orange-500"></div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
