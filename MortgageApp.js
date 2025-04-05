
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

export default function MortgageApp() {
  const [principal, setPrincipal] = useState(300000);
  const [interestRate, setInterestRate] = useState(5);
  const [term, setTerm] = useState(25);

  const calculatePayment = () => {
    const r = interestRate / 100 / 12;
    const n = term * 12;
    const payment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return payment.toFixed(2);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Mortgage Capital Investment</h1>

      <Tabs defaultValue="rates" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="rates">Mortgage Rates</TabsTrigger>
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
        </TabsList>

        <TabsContent value="rates">
          <Card className="mt-4">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Current Rates</h2>
              <ul className="space-y-2">
                <li>5-Year Fixed: 4.99%</li>
                <li>3-Year Fixed: 5.25%</li>
                <li>5-Year Variable: 5.60%</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calculator">
          <Card className="mt-4">
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold mb-2">Mortgage Calculator</h2>
              <div className="space-y-2">
                <Input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(+e.target.value)}
                  placeholder="Principal ($)"
                />
                <Input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(+e.target.value)}
                  placeholder="Interest Rate (%)"
                />
                <Input
                  type="number"
                  value={term}
                  onChange={(e) => setTerm(+e.target.value)}
                  placeholder="Amortization (years)"
                />
              </div>
              <div>
                <p className="text-lg font-medium">
                  Monthly Payment: ${calculatePayment()}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blog">
          <Card className="mt-4">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Latest Blog Posts</h2>
              <ul className="space-y-2">
                <li><a href="https://mortgagecapitalinvestment.com/blog/post1" target="_blank" className="text-blue-600 underline">How to Get the Best Rate in 2025</a></li>
                <li><a href="https://mortgagecapitalinvestment.com/blog/post2" target="_blank" className="text-blue-600 underline">Fixed vs. Variable Mortgages</a></li>
                <li><a href="https://mortgagecapitalinvestment.com/blog/post3" target="_blank" className="text-blue-600 underline">Tips for First-Time Homebuyers</a></li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
