import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 gradient-primary overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="w-full max-w-full px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="mb-4 font-bold text-primary-foreground font-display heading-section">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
