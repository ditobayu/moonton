import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/react";
import React from "react";
import { router } from "@inertiajs/react";

const SubscriptionPlan = ({ auth, subscriptionPlans }) => {
    const selectSubscription = (id) => {
        router.post(
            route("user.dashboard.subscriptionPlan.userSubscribe", {
                subscriptionPlan: id,
            })
        );
    };
    return (
        <>
            <Authenticated auth={auth}>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                    <title>SubscriptionPlan</title>
                </Head>

                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>

                    {/* <!-- Pricing Card --> */}
                    <div className="flex justify-center gap-10 mt-[70px]">
                        {subscriptionPlans.map((subscriptionPlan) => (
                            <SubscriptionCard
                                isPremium={subscriptionPlan.name === "Premium"}
                                id={subscriptionPlan.id}
                                name={subscriptionPlan.name}
                                price={subscriptionPlan.price}
                                durationInMonth={
                                    subscriptionPlan.active_period_in_month
                                }
                                features={JSON.parse(subscriptionPlan.features)}
                                onSelectSubscription={() =>
                                    selectSubscription(subscriptionPlan.id)
                                }
                            />
                        ))}
                    </div>
                </div>
            </Authenticated>
        </>
    );
};

export default SubscriptionPlan;
