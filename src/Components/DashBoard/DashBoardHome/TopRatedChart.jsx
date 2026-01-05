import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { Bar, BarChart, Tooltip, XAxis, ResponsiveContainer, YAxis } from "recharts";

const TopRatedChart = () => {
    const axios = useAxios();
    const [data, setData] = useState([]);

    const [theme, setTheme] = useState(
        document.documentElement.getAttribute("data-theme") || "light"
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setTheme(
                document.documentElement.getAttribute("data-theme") || "light"
            );
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        axios.get("/top-rated").then(res => {
            setData(
                res.data.map(m => ({
                    name: m.title,
                    rating: m.rating,
                }))
            );
        });
    }, [axios]);

    return (
        <div className="mt-10 p-6 rounded-xl bg-slate-100 dark:bg-slate-900 max-w-5xl">
            <h2 className="mb-4 text-xl font-bold text-center text-yellow-500">
                Top Rated Movies
            </h2>

            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 20, left: 0, bottom: 60 }}
                >
                    <XAxis
                        dataKey="name"
                        angle={-25}
                        textAnchor="end"
                        interval={0}
                        tick={{
                            fontSize: 12,
                            fill: theme === "dark" ? "#ffffff" : "#2563eb",
                        }}
                        stroke={theme === "dark" ? "#ffffff" : "#2563eb"}
                    />

                    <YAxis
                        domain={[0, 10]}
                        tick={{
                            fontSize: 12,
                            fill: theme === "dark" ? "#ffffff" : "#2563eb",
                        }}
                        stroke={theme === "dark" ? "#ffffff" : "#2563eb"}
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
                            color: theme === "dark" ? "#f9fafb" : "#111827",
                        }}
                    />

                    <Bar
                        dataKey="rating"
                        fill={theme === "dark" ? "#facc15" : "#2563eb"}
                        radius={[6, 6, 0, 0]}
                        barSize={50}
                    />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default TopRatedChart;
