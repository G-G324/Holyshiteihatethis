`src/App.jsx`
```javascript
import { motion } from "framer-motion";
import { ShoppingBag, Users, Newspaper } from "lucide-react";


export default function App() {
return (
<div className="min-h-screen bg-white text-black flex flex-col">
{/* Navigation */}
<header className="flex justify-between items-center p-6 border-b border-gray-200">
<h1 className="text-2xl font-bold tracking-tight">Go Figure More</h1>
<nav className="flex gap-6 text-sm font-medium">
<span className="cursor-pointer hover:opacity-70">Shop</span>
<span className="cursor-pointer hover:opacity-70">Lookbook</span>
<span className="cursor-pointer hover:opacity-70">The Movement</span>
<span className="cursor-pointer hover:opacity-70">Journal</span>
<span className="cursor-pointer hover:opacity-70">Exclusive Content</span>
</nav>
</header>


{/* Hero Section */}
<section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20">
<motion.h2
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-5xl font-extrabold tracking-tight mb-6"
>
Streetwear. Culture. Expression.
</motion.h2>
<p className="max-w-xl text-gray-600 mb-8">
Go Figure More blends bold street culture with creativity and individuality.
Discover fashion that tells a story, built for both consumers and retailers.
</p>
<button className="rounded-2xl px-6 py-3 text-lg shadow-md bg-black text-white hover:bg-gray-800">
Explore Collection
</button>
</section>


{/* Feature Highlights */}
<section className="grid md:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl mx-auto">
<div className="shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
<ShoppingBag className="mx-auto mb-4 h-10 w-10" />
<h3 className="text-lg font-semibold mb-2">Shop Streetwear</h3>
<p className="text-gray-500 text-sm">
Browse categories, filter products, and experience seamless checkout.
</p>
</div>


<div className="shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
<Users className="mx-auto mb-4 h-10 w-10" />
<h3 className="text-lg font-semibold mb-2">Wholesale Access</h3>
<p className="text-gray-500 text-sm">
Retailers and stylists can join our exclusive B2B program.
</p>
</div>


<div className="shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
<Newspaper className="mx-auto mb-4 h-10 w-10" />
<h3 className="text-lg font-semibold mb-2">Journal & Stories</h3>
<p className="text-gray-500 text-sm">
Dive into culture, collabs, and the brand stories behind the clothes.
</p>
</div>
</section>


{/* Footer */}
<footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
© {new Date().getFullYear()} Go Figure More. All rights reserved.
</footer>
</div>
);
}
```
