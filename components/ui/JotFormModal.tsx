"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface JotFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JotFormModal({ isOpen, onClose }: JotFormModalProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";

      // Load JotForm embed handler script
      const existingScript = document.querySelector('script[src*="for-form-embed-handler.js"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
        script.async = true;
        script.onload = () => {
          // Initialize JotForm embed handler
          if (typeof window !== "undefined" && (window as unknown as { jotformEmbedHandler?: (selector: string, url: string) => void }).jotformEmbedHandler) {
            (window as unknown as { jotformEmbedHandler: (selector: string, url: string) => void }).jotformEmbedHandler(
              "iframe[id='JotFormIFrame-252807783245060']",
              "https://form.jotform.com/"
            );
          }
        };
        document.body.appendChild(script);
      } else {
        // Script already loaded, just reinitialize
        if (typeof window !== "undefined" && (window as unknown as { jotformEmbedHandler?: (selector: string, url: string) => void }).jotformEmbedHandler) {
          (window as unknown as { jotformEmbedHandler: (selector: string, url: string) => void }).jotformEmbedHandler(
            "iframe[id='JotFormIFrame-252807783245060']",
            "https://form.jotform.com/"
          );
        }
      }
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="jotform-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[var(--text-dark)]/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[var(--bg-cream)] rounded-[var(--radius-lg)] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
        style={{
          border: "1px solid var(--border-dark)",
          boxShadow: "12px 12px 0px var(--primary-red)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div>
            <h2
              id="jotform-modal-title"
              className="font-serif text-xl sm:text-2xl font-bold"
              style={{ color: "var(--text-dark)" }}
            >
              Start Your Project
            </h2>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--text-grey)" }}
            >
              Fill out the form below and we will get back to you within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-[var(--primary-red-light)] group"
            aria-label="Close modal"
          >
            <X
              className="w-5 h-5 transition-colors group-hover:text-[var(--primary-red)]"
              style={{ color: "var(--text-grey)" }}
            />
          </button>
        </div>

        {/* Form Content */}
        <div
          className="overflow-y-auto"
          style={{
            maxHeight: "calc(90vh - 120px)",
            background: "var(--bg-off-white)",
          }}
        >
          <iframe
            id="JotFormIFrame-252807783245060"
            title="Client Intake Form"
            onLoad={() => {
              if (typeof window !== "undefined") {
                window.scrollTo(0, 0);
              }
            }}
            allowFullScreen
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/252807783245060"
            frameBorder={0}
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              height: "539px",
              border: "none",
            }}
          />
        </div>

        {/* Footer */}
        <div
          className="px-6 py-3 border-t flex items-center justify-between"
          style={{
            borderColor: "var(--border-color)",
            background: "var(--bg-cream)",
          }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--text-grey)" }}
          >
            Your information is secure and will never be shared.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium rounded-[50px] transition-all duration-300 border hover:-translate-y-[2px]"
            style={{
              borderColor: "var(--primary-red)",
              color: "var(--primary-red)",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

// Context for managing modal state across the app
interface JotFormModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const JotFormModalContext = React.createContext<JotFormModalContextType | undefined>(undefined);

export function JotFormModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = React.useCallback(() => setIsOpen(true), []);
  const closeModal = React.useCallback(() => setIsOpen(false), []);

  return (
    <JotFormModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <JotFormModal isOpen={isOpen} onClose={closeModal} />
    </JotFormModalContext.Provider>
  );
}

export function useJotFormModal() {
  const context = React.useContext(JotFormModalContext);
  if (context === undefined) {
    throw new Error("useJotFormModal must be used within a JotFormModalProvider");
  }
  return context;
}

// CTA Button component that opens the modal
interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "lightOutline";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
}

export function CTAButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
}: CTAButtonProps) {
  const { openModal } = useJotFormModal();

  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--primary-red)] text-white rounded-[50px] border border-[var(--primary-red)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(194,59,34,0.3)] active:-translate-y-[1px] active:shadow-[0_6px_16px_rgba(194,59,34,0.25)] focus:ring-[var(--primary-red)]",
    outline:
      "bg-transparent border border-[var(--primary-red)] text-[var(--primary-red)] rounded-[50px] hover:bg-[var(--primary-red)] hover:text-white hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(194,59,34,0.3)] focus:ring-[var(--primary-red)]",
    light:
      "bg-[var(--text-dark)] text-white border border-[var(--text-dark)] rounded-[50px] hover:bg-[var(--text-dark)]/90 hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] focus:ring-[var(--text-dark)]",
    lightOutline:
      "bg-transparent border-2 border-white text-white rounded-[50px] hover:bg-white hover:text-[var(--primary-red)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)] focus:ring-white",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm min-h-[36px]",
    md: "px-7 py-3 text-[0.95rem] min-h-[44px]",
    lg: "px-8 py-4 text-base min-h-[52px]",
  };

  return (
    <button
      onClick={openModal}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
