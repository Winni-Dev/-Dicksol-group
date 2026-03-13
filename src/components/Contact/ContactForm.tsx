import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../UI/Button';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          to_email: 'directeur@dicksol-groupe.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-primary-charcoal p-8 border border-primary-yellow/10"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-500 flex items-center"
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 flex items-center"
        >
          <AlertCircle className="w-5 h-5 mr-2" />
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-primary-offwhite/80 mb-2 text-sm">
              Nom complet *
            </label>
            <input
              type="text"
              {...register('name', { required: 'Le nom est requis' })}
              className={`w-full px-4 py-3 bg-primary-black border ${
                errors.name ? 'border-red-500' : 'border-primary-yellow/20'
              } focus:border-primary-yellow outline-none text-primary-offwhite transition-colors`}
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-primary-offwhite/80 mb-2 text-sm">
              Email *
            </label>
            <input
              type="email"
              {...register('email', { 
                required: 'L\'email est requis',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email invalide'
                }
              })}
              className={`w-full px-4 py-3 bg-primary-black border ${
                errors.email ? 'border-red-500' : 'border-primary-yellow/20'
              } focus:border-primary-yellow outline-none text-primary-offwhite transition-colors`}
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-primary-offwhite/80 mb-2 text-sm">
              Téléphone *
            </label>
            <input
              type="tel"
              {...register('phone', { required: 'Le téléphone est requis' })}
              className={`w-full px-4 py-3 bg-primary-black border ${
                errors.phone ? 'border-red-500' : 'border-primary-yellow/20'
              } focus:border-primary-yellow outline-none text-primary-offwhite transition-colors`}
            />
            {errors.phone && (
              <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-primary-offwhite/80 mb-2 text-sm">
              Objet *
            </label>
            <input
              type="text"
              {...register('subject', { required: 'L\'objet est requis' })}
              className={`w-full px-4 py-3 bg-primary-black border ${
                errors.subject ? 'border-red-500' : 'border-primary-yellow/20'
              } focus:border-primary-yellow outline-none text-primary-offwhite transition-colors`}
            />
            {errors.subject && (
              <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-primary-offwhite/80 mb-2 text-sm">
            Message *
          </label>
          <textarea
            rows={5}
            {...register('message', { required: 'Le message est requis' })}
            className={`w-full px-4 py-3 bg-primary-black border ${
              errors.message ? 'border-red-500' : 'border-primary-yellow/20'
            } focus:border-primary-yellow outline-none text-primary-offwhite transition-colors resize-none`}
          />
          {errors.message && (
            <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon={Send}
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;