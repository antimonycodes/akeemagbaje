import React from "react";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Contact = () => {
  // Replace with your actual coordinates
  const location = {
    lat: 43.1394, // Example coordinates for Brantford
    lng: -80.2644,
  };

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Information Card */}
        <div className="bg-white shadow-lg">
          <div>
            <div className="text-3xl font-bold">Contact Us</div>
          </div>
          <div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">(647) 648-1808</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-gray-600">(647) 648-1808</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">Elephantcompany@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">162 Longboat Run W</p>
                  <p className="text-gray-600">Brantford, ON N3T 0B8</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        {/* <div className="h-96 rounded-lg overflow-hidden shadow-lg">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={location}
              zoom={15}
              options={options}
            >
              <Marker position={location} />
            </GoogleMap>
          </LoadScript>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
