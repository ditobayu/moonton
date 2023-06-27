import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/react";
import React from "react";

const SubscriptionPlan = () => {
    return (
        <>
            <Authenticated>
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
                        <SubscriptionCard
                            isPremium={false}
                            id={1}
                            name="Basic"
                            price={299000}
                            durationInMonth={3}
                            features={["feature 1", "feature 2", "feature 3"]}
                        />
                        <SubscriptionCard
                            isPremium={true}
                            id={2}
                            name="Premium"
                            price={800000}
                            durationInMonth={6}
                            features={["feature 1", "feature 2", "feature 3"]}
                        />
                    </div>
                </div>
            </Authenticated>
        </>
    );
};

export default SubscriptionPlan;
