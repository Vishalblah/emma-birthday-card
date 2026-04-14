import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { X, Heart, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Memory {
  id: number;
  image: string;
  caption: string;
  sarcasticNote: string;
}

const memories: Memory[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1758523672800-63130c59175b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMGxhdWdoaW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzc2MTM3ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "That time we laughed until we cried",
    sarcasticNote: "You have the most annoying laugh… and I love it 😊",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1572034747998-1263b822be0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHN1bnNldCUyMGJlYWNoJTIwd2Fsa3xlbnwxfHx8fDE3NzYyNTAxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Sunset walks and deep talks",
    sarcasticNote: "You're terrible at walking straight on the beach, btw",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1763683943836-b3cdfd41d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzaGFyaW5nJTIwZGVzc2VydCUyMGNhZmV8ZW58MXx8fHwxNzc2MjUwMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Sweet moments (literally)",
    sarcasticNote: "You always steal my dessert. Every. Single. Time.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1761472084994-61d80b8f4053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwYWR2ZW50dXJlJTIwaGlraW5nJTIwbW91bnRhaW5zfGVufDF8fHx8MTc3NjI1MDEzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Adventures with my favorite person",
    sarcasticNote: "You complained the whole way up. Worth it though ❤️",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1774538272529-53562925d6bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG9tZSUyMG1vdmllJTIwbmlnaHR8ZW58MXx8fHwxNzc2MjUwMTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Cozy nights in",
    sarcasticNote: "You fall asleep in the first 10 minutes. Every time.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1672841821756-fc04525771c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbXVzaWMlMjBmZXN0aXZhbCUyMGNyb3dkfGVufDF8fHx8MTc3NjI0NTE5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Making memories together",
    sarcasticNote: "Still can't believe you made me go. Best night ever.",
  },
];

export function MemoriesGallery() {
  const navigate = useNavigate();
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 py-16 px-6">
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Our Memories
        </h1>
        <p className="text-xl text-gray-600">
          A collection of moments I pretend to tolerate 😏
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            onClick={() => setSelectedMemory(memory)}
            className="cursor-pointer group"
          >
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/40 border border-white/60 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={memory.image}
                  alt={memory.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <p className="text-gray-700 font-medium">{memory.caption}</p>
              </div>
              <motion.div
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.2 }}
              >
                <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button
          onClick={() => navigate("/letter")}
          className="group px-10 py-5 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="flex items-center gap-2">
            Continue
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </span>
        </button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={selectedMemory.image}
                  alt={selectedMemory.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 space-y-4">
                <h3 className="text-3xl font-bold text-gray-800">
                  {selectedMemory.caption}
                </h3>
                <p className="text-xl text-gray-600 italic">
                  {selectedMemory.sarcasticNote}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
